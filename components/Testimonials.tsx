import Image from "next/image";
import { SectionHead } from "@/components/ui";
import { testimonials, type Testimonial } from "@/lib/content";

// Layout preview only: never rendered in production builds.
const samples: Testimonial[] = Array.from({ length: 4 }, (_, i) => ({
  name: `Sample client ${i + 1}`,
  role: "Role, Company",
  quote: "Sample testimonial. Replace with a real, approved quote in lib/content.ts before this section goes live.",
}));

export default function Testimonials() {
  const isSample = testimonials.length === 0;
  if (isSample && process.env.NODE_ENV === "production") return null;
  const items = isSample ? samples : testimonials;

  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-title">
      <SectionHead
        id="testimonials-title"
        label="Testimonials"
        title="Trusted by Clients."
        intro="Feedback from founders and teams I've built products for."
      />
      <div className={`quotes${isSample ? " quotes--sample" : ""}`}>
        {items.map((t) => (
          <figure className="quote" key={t.name}>
            <figcaption className="quote__who">
              {t.avatar ? (
                <Image className="quote__avatar" src={t.avatar} alt="" width={45} height={45} />
              ) : (
                <span className="quote__avatar quote__avatar--blank" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
              )}
              <span>
                <span className="quote__name">{t.name}</span>
                <span className="quote__role">{t.role}</span>
              </span>
            </figcaption>
            <blockquote className="quote__text">{t.quote}</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
