import { useEffect, useRef, useState } from "react";
import { Lightning, Stack } from "@phosphor-icons/react/dist/ssr";
import Fingerprint from "@/components/Fingerprint";
import { SectionHead } from "@/components/ui";
import { whyMe } from "@/lib/content";
import { sha256Hex } from "@/lib/fingerprint";
import { OWNER } from "@/lib/site";

const HEX_CHARS = "0123456789abcdef";
const RESOLVE_MS = 1400;
const icons = { stack: Stack, lightning: Lightning };

// The fingerprint resolves left to right the first time it scrolls into view:
// settled characters are the real digest, the rest is noise, and each settled
// hex character draws its four squares. The build-time digest renders first,
// so the page is complete without JS and for reduced motion.
function useResolvingHash(nameHash: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(nameHash.length);
  const [display, setDisplay] = useState(nameHash);
  const [computedHere, setComputedHere] = useState(false);

  useEffect(() => {
    let frame = 0;
    let cancelled = false;
    let io: IntersectionObserver | undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    sha256Hex(OWNER)
      .then((hex) => {
        // Only claim "computed in your browser" when the browser agrees with the build.
        if (cancelled || hex !== nameHash) return;
        setComputedHere(true);
        if (reduceMotion || !ref.current) return;

        const render = (n: number) => {
          setShown(n);
          setDisplay(
            hex.slice(0, n) +
              Array.from({ length: hex.length - n }, () => HEX_CHARS[Math.floor(Math.random() * 16)]).join("")
          );
        };
        io = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            io?.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
              const n = Math.min(hex.length, Math.floor(((now - start) / RESOLVE_MS) * hex.length));
              render(n);
              if (n < hex.length) frame = requestAnimationFrame(tick);
            };
            render(0);
            frame = requestAnimationFrame(tick);
          },
          { threshold: 0.4 }
        );
        io.observe(ref.current);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      io?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [nameHash]);

  return { ref, shown, display, computedHere };
}

export default function WhyMe({ nameHash }: { nameHash: string }) {
  const { ref, shown, display, computedHere } = useResolvingHash(nameHash);
  const body = computedHere
    ? whyMe.feature.body
    : whyMe.feature.body.replace(", computed in your browser", "");

  return (
    <section className="section" id="why" aria-labelledby="why-title">
      <SectionHead
        id="why-title"
        label="Why Me"
        title="More than just writing code."
        intro="Every project is built to be secure, maintainable and ready for real users from the first release."
      />
      <div className="why">
        <article className="why__feature" ref={ref}>
          <div className="why__print">
            <Fingerprint
              hex={nameHash}
              revealed={shown * 4}
              label={`Visual fingerprint of the SHA-256 hash of "${OWNER}"`}
            />
            <code className="why__hash" aria-hidden="true">
              {display.slice(0, 32)}
              <br />
              {display.slice(32)}
            </code>
          </div>
          <div className="why__caption">
            <h3 className="why__title">{whyMe.feature.title}</h3>
            <p className="why__body">{body}</p>
          </div>
        </article>
        <div className="why__points">
          {whyMe.points.map((p) => {
            const Icon = icons[p.icon];
            return (
              <article className="why__point" key={p.title}>
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={28} weight="regular" />
                </span>
                <h3 className="why__title">{p.title}</h3>
                <p className="why__body">{p.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
