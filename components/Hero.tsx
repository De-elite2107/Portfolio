import { useEffect, useState } from "react";
import Fingerprint from "@/components/Fingerprint";
import { FINGERPRINT_SIZE, sha256Hex } from "@/lib/fingerprint";

export const SIGNED_NAME = "Delight Adediran";
const HEX_CHARS = "0123456789abcdef";
const RESOLVE_MS = 1400;

type Props = {
  // Digest computed at build time, so the page renders complete without JS
  // and for visitors who prefer reduced motion.
  nameHash: string;
};

export default function Hero({ nameHash }: Props) {
  const [shown, setShown] = useState(nameHash.length);
  const [display, setDisplay] = useState(nameHash);
  const [computedHere, setComputedHere] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let frame = 0;
    let cancelled = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    sha256Hex(SIGNED_NAME)
      .then((hex) => {
        if (cancelled) return;
        // Only claim "computed in your browser" when the browser agrees with the build.
        if (hex !== nameHash) return setStarted(true);
        setComputedHere(true);
        if (reduceMotion) return setStarted(true);

        // Resolve left to right: settled characters are real, the rest is noise,
        // and each settled hex character draws its four fingerprint squares.
        const render = (n: number) => {
          setShown(n);
          setDisplay(
            hex.slice(0, n) +
              Array.from({ length: hex.length - n }, () => HEX_CHARS[Math.floor(Math.random() * 16)]).join("")
          );
        };
        render(0);
        setStarted(true);
        const start = performance.now();
        const tick = (now: number) => {
          const n = Math.min(hex.length, Math.floor(((now - start) / RESOLVE_MS) * hex.length));
          render(n);
          if (n < hex.length) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      })
      .catch(() => setStarted(true));

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [nameHash]);

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">
            Delight
            <br />
            Adediran
          </h1>
          <p className="hero__lede">
            Full-stack engineer with a B.Sc. in Cyber Security. I build web, mobile, Web3 and AI products that are
            secure by default and hold up in production.
          </p>
          <p className="hero__where">Based in Lagos, Nigeria. Working with clients anywhere.</p>
          <div className="hero__actions">
            <a className="button button--light" href="#work">
              See my work
            </a>
            <a className="button button--ghost" href="#contact">
              Start a project
            </a>
          </div>
        </div>

        <figure className={`signature${started ? " is-started" : ""}`}>
          <Fingerprint
            className="signature__grid"
            hex={nameHash}
            revealed={shown * 4}
            label={`Visual fingerprint of the SHA-256 hash of "${SIGNED_NAME}"`}
          />
          <figcaption className="signature__caption">
            <code className="signature__hash">
              <span className="visually-hidden">SHA-256: {nameHash}</span>
              <span aria-hidden="true">
                {display.slice(0, 32)}
                <br />
                {display.slice(32)}
              </span>
            </code>
            <span className="signature__note">
              {computedHere
                ? `SHA-256 of "${SIGNED_NAME}", computed in your browser just now. Each of the ${
                    FINGERPRINT_SIZE ** 2
                  } squares is one bit.`
                : `SHA-256 of "${SIGNED_NAME}". Each of the ${FINGERPRINT_SIZE ** 2} squares is one bit.`}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
