import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

const DURATION = 1200;

// Final values render on the server; on the client they count up from zero
// the first time the row scrolls into view.
export default function Stats() {
  const ref = useRef<HTMLDListElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setProgress(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section stats" aria-labelledby="stats-title">
      <h2 className="stats__title" id="stats-title">
        Numbers That Speak Volumes
      </h2>
      <dl className="stats__grid" ref={ref}>
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>
              {Math.round(s.value * progress)}
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
