import { capabilities } from "@/lib/capabilities";

export default function Capabilities() {
  return (
    <section className="section section--rule" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title" id="capabilities-title">
            Capabilities
          </h2>
          <p className="section__intro">What I build, and the tools I build it with.</p>
        </header>
        <div className="capabilities">
          {capabilities.map((c, i) => (
            <section className="capability" key={c.title} aria-labelledby={`cap-${i}`}>
              <h3 className="capability__title" id={`cap-${i}`}>
                {c.title}
              </h3>
              <p className="capability__summary">{c.summary}</p>
              <ul className="tools">
                {c.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
