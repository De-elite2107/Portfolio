import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

// Server-side proxy for the page-view beacon in _app.tsx. Forwards each visit
// to De-elite Sentinel's /api/monitor/activity, signed the way Sentinel's
// VerifyMonitoringSignature middleware expects: X-API-Key, X-Timestamp, and an
// HMAC-SHA256 of `${timestamp}.${body}` keyed with the API secret. The secret
// never reaches the browser, and the IP comes from the request, not the client.

function sentinelEndpoint(base: string) {
  const trimmed = base.replace(/\/+$/, "");
  return trimmed.endsWith("/api/monitor/activity") ? trimmed : `${trimmed}/api/monitor/activity`;
}

function clientIp(req: NextApiRequest) {
  const netlify = req.headers["x-nf-client-connection-ip"];
  if (typeof netlify === "string" && netlify) return netlify;
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded) return forwarded.split(",")[0].trim();
  return req.socket.remoteAddress ?? "";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const base = process.env.LARAVEL_MONITOR_URL;
  const apiKey = process.env.MONITOR_API_KEY;
  const apiSecret = process.env.MONITOR_API_SECRET;
  // Monitoring is best-effort: without full config, accept the beacon and drop it.
  if (!base || !apiKey || !apiSecret) return res.status(204).end();

  const input = typeof req.body === "string" ? safeParse(req.body) : req.body ?? {};
  const endpoint = typeof input.endpoint === "string" ? input.endpoint.slice(0, 2048) : "/";
  const responseTime = Number(input.response_time);

  const body = JSON.stringify({
    ip_address: clientIp(req),
    method: "GET",
    endpoint,
    response_code: 200,
    user_agent: String(req.headers["user-agent"] ?? "").slice(0, 1024),
    response_time: Number.isFinite(responseTime) ? Math.round(responseTime) : null,
  });
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac("sha256", apiSecret).update(`${timestamp}.${body}`).digest("hex");

  try {
    await fetch(sentinelEndpoint(base), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
        "X-Timestamp": String(timestamp),
        "X-Signature": signature,
      },
      body,
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    // Never let a monitoring outage surface to visitors.
  }
  return res.status(204).end();
}

function safeParse(raw: string) {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
