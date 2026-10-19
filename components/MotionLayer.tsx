import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

// Page-wide motion, matched to the reference: Lenis smooth scrolling (1.6s
// glide), a red dot that trails a mouse pointer on a spring, and one-time
// reveals for anything marked data-reveal. All of it is skipped for reduced
// motion, and the cursor only appears for a real mouse.

// Spring from the reference cursor: stiffness 500, damping 60, mass 1.
const STIFFNESS = 500;
const DAMPING = 60;
const DOT = 20;
const INTERACTIVE = "a, button, label, summary, input, select, textarea, [role='button']";

function useSmoothScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const lenis = new Lenis({ duration: 1.6, autoRaf: true, anchors: true });
    return () => lenis.destroy();
  }, [enabled]);
}

function useReveals(mode: { motion: boolean } | null) {
  useEffect(() => {
    if (!mode) return;
    const root = document.documentElement;
    // Set by the inline script in _document so hidden states apply before first paint.
    if (!mode.motion) {
      root.classList.remove("js-reveal");
      return;
    }
    (window as { __revealReady?: boolean }).__revealReady = true;
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [mode]);
}

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let frame = 0;
    let last = 0;
    let shown = false;

    const draw = () => {
      el.style.transform = `translate3d(${pos.x - DOT / 2}px, ${pos.y}px, 0)`;
    };

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      for (const k of ["x", "y"] as const) {
        const force = STIFFNESS * (target[k] - pos[k]) - DAMPING * vel[k];
        vel[k] += force * dt;
        pos[k] += vel[k] * dt;
      }
      draw();
      const moving = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) + Math.abs(vel.x) + Math.abs(vel.y) > 0.1;
      frame = moving ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      // The Cal.com iframe swallows pointer events, so hide the dot over it.
      const overFrame = (e.target as Element | null)?.tagName === "IFRAME";
      if (!shown) {
        pos.x = target.x;
        pos.y = target.y;
        draw();
      }
      shown = !overFrame;
      el.classList.toggle("is-shown", shown);
      // Over buttons and links (many of them red) the dot opens into a white ring.
      el.classList.toggle("is-active", !!(e.target as Element | null)?.closest?.(INTERACTIVE));
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      shown = false;
      el.classList.remove("is-shown");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor-dot" ref={ref} aria-hidden="true" />;
}

export default function MotionLayer() {
  // Decided after mount so the server and first client render agree.
  const [mode, setMode] = useState<{ motion: boolean; cursor: boolean } | null>(null);

  useEffect(() => {
    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode({ motion, cursor: motion && window.matchMedia("(hover: hover) and (pointer: fine)").matches });
  }, []);

  useSmoothScroll(mode?.motion === true);
  useReveals(mode);

  return mode?.cursor ? <Cursor /> : null;
}
