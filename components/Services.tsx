import Image from "next/image";
import { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Reel from "@/components/Reel";
import { Button, SectionHead } from "@/components/ui";
import { services, type ServiceMedia } from "@/lib/content";
import { CAL_URL } from "@/lib/site";

const MEDIA_SIZES = "(min-width: 810px) 465px, 90vw";

type Slides = Extract<ServiceMedia, { type: "carousel" }>["slides"];

function Carousel({ slides, label }: { slides: Slides; label: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div
            className="carousel__slide"
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={i !== index}
          >
            {s.kind === "image" ? (
              <Image src={s.src} alt={s.alt} fill sizes={MEDIA_SIZES} />
            ) : (
              <div className="phones" role="img" aria-label={s.alt}>
                {s.srcs.map((src) => (
                  <div className="phones__screen" key={src}>
                    <Image src={src} alt="" fill sizes="160px" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? "is-active" : undefined}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function Compare({ media }: { media: Extract<ServiceMedia, { type: "compare" }> }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="compare" style={{ ["--pos" as string]: `${pos}%` }}>
      <Image src={media.after} alt={media.afterAlt} fill sizes={MEDIA_SIZES} />
      <div className="compare__before">
        <Image src={media.before} alt={media.beforeAlt} fill sizes={MEDIA_SIZES} />
      </div>
      <span className="compare__tag compare__tag--before">Before</span>
      <span className="compare__tag compare__tag--after">After</span>
      <span className="compare__handle" aria-hidden="true">
        <CaretLeft size={14} weight="bold" />
        <CaretRight size={14} weight="bold" />
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare the old and new Hightower websites"
      />
    </div>
  );
}

function Media({ media, title }: { media: ServiceMedia; title: string }) {
  if (media.type === "reel") {
    return <Reel images={media.images.map((src) => ({ src, alt: `${title} example` }))} sizes={MEDIA_SIZES} />;
  }
  if (media.type === "carousel") return <Carousel slides={media.slides} label={`${title} examples`} />;
  return <Compare media={media} />;
}

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <SectionHead
        id="services-title"
        label="Services"
        title="What I Build"
        intro="Everything you need to take a product from idea to production."
      />
      <div className="services">
        {services.map((s, i) => (
          <article className="service" data-reveal="scale" key={s.title} aria-labelledby={`service-${i}`}>
            <div className="service__text">
              <h3 className="service__title" id={`service-${i}`}>
                {s.title}
              </h3>
              <p className="service__body">{s.body}</p>
              <Button href={CAL_URL} variant="dark" external className="btn--sm">
                Book a Call
              </Button>
            </div>
            <div className="service__media">
              <Media media={s.media} title={s.title} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
