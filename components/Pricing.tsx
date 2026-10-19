import { useState } from "react";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Button, Pill, SectionHead } from "@/components/ui";
import { plans, type Currency } from "@/lib/content";
import { CAL_URL } from "@/lib/site";

const formatters: Record<Currency, Intl.NumberFormat> = {
  USD: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
  NGN: new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }),
};

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <SectionHead
        id="pricing-title"
        label="Pricing"
        title="Simple Pricing."
        intro="Clear starting prices for the most common projects. Web3 and AI builds are quoted after a short call."
      />
      <div className="filters" role="group" aria-label="Currency">
        {(["USD", "NGN"] as const).map((c) => (
          <button
            key={c}
            type="button"
            className={`filter${currency === c ? " is-active" : ""}`}
            aria-pressed={currency === c}
            onClick={() => setCurrency(c)}
          >
            {c === "USD" ? "USD ($)" : "NGN (₦)"}
          </button>
        ))}
      </div>
      <div className="plans">
        {plans.map((p, i) => (
          <article className="plan" data-reveal="up" key={p.name} aria-labelledby={`plan-${i}`}>
            <div className="plan__head">
              <div className="plan__row">
                <h3 className="plan__name" id={`plan-${i}`}>
                  {p.name}
                </h3>
                {p.badge && (
                  <Pill className="pill--status">
                    <span className="badge__dot badge__dot--sm" aria-hidden="true" />
                    {p.badge}
                  </Pill>
                )}
              </div>
              <p className="plan__price">
                {p.from && <span className="plan__from">from</span>}
                <span className="plan__amount">{formatters[currency].format(p.price[currency])}</span>
                <span className="plan__per">{p.per}</span>
              </p>
              <p className="plan__audience">{p.audience}</p>
              <Button href={CAL_URL} external className="btn--block">
                {p.cta}
              </Button>
            </div>
            <ul className="plan__features">
              {p.features.map((f) => (
                <li key={f}>
                  <Sparkle size={18} aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
