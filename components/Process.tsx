import { Button, SectionHead } from "@/components/ui";
import { processSteps } from "@/lib/content";
import { CAL_URL } from "@/lib/site";

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <SectionHead
        id="process-title"
        label="Process"
        title="From Idea to Launch."
        intro="A clear path from the first call to a product in production, with you in the loop at every step."
      />
      <ol className="steps">
        {processSteps.map((s, i) => (
          <li className="step" key={s.title}>
            <div className="step__top">
              <span className="step__dots" aria-hidden="true">
                {processSteps.map((_, d) => (
                  <span key={d} className={d <= i ? "is-on" : undefined} />
                ))}
              </span>
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="center-cta">
        <Button href={CAL_URL} external>
          Book a 15-min Call
        </Button>
      </div>
    </section>
  );
}
