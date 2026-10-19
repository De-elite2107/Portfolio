import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { SectionHead } from "@/components/ui";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <SectionHead
        id="faq-title"
        label="FAQ"
        title="Frequently Asked Questions."
        intro="Common questions about timelines, payment and working together."
      />
      <div className="faq">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq__item${isOpen ? " is-open" : ""}`} key={f.q}>
              <h3>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <CaretDown className="faq__caret" size={24} aria-hidden="true" />
                </button>
              </h3>
              <div className="faq__a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
