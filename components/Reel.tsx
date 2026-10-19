import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: { src: string; alt: string }[];
  sizes: string;
  interval?: number;
  priority?: boolean;
};

// Crossfading screenshots with a slow push-in, standing in for a showreel.
// Holds on the first frame for reduced motion.
export default function Reel({ images, sizes, interval = 4000, priority }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="reel">
      {images.map((img, i) => (
        <div key={img.src} className={`reel__frame${i === active ? " is-active" : ""}`} aria-hidden={i !== active}>
          <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority && i === 0} />
        </div>
      ))}
    </div>
  );
}
