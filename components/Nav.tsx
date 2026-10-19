import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Button, LogoMark } from "@/components/ui";
import { BRAND, CAL_URL, navLinks } from "@/lib/site";

// Scrolling this far in one direction flips the header; smaller moves are ignored
// so trackpad jitter never makes it flicker.
const TOLERANCE = 8;
// Always shown within this distance of the top of the page.
const TOP_ZONE = 120;

export default function Nav({ logoHash }: { logoHash: string }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Slides away while scrolling down and returns on the way back up, as on the reference.
  useEffect(() => {
    let anchor = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y < TOP_ZONE) {
        setHidden(false);
        anchor = y;
        return;
      }
      if (Math.abs(y - anchor) < TOLERANCE) return;
      setHidden(y > anchor);
      anchor = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className={`nav-wrap${hidden && !open ? " is-hidden" : ""}`}>
      <nav className={`nav${open ? " is-open" : ""}`} ref={ref} aria-label="Main">
        <div className="nav__bar">
          <a className="brand" href="#top">
            <LogoMark hash={logoHash} />
            <span className="brand__name">{BRAND}</span>
          </a>
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <Button href={CAL_URL} external className="nav__cta">
            Book Call
          </Button>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
          </button>
        </div>
        <div className="nav__menu" id="nav-menu" hidden={!open}>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={CAL_URL} external>
            Book Call
          </Button>
        </div>
      </nav>
    </header>
  );
}
