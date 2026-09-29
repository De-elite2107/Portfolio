import Image from "next/image";
import Fingerprint from "@/components/Fingerprint";
import { projects, statusLabel, type Project } from "@/lib/projects";

type Props = {
  // SHA-256 of each image-less project's title, drawn as its thumbnail.
  titleHashes: Record<string, string>;
};

function Status({ project }: { project: Project }) {
  return (
    <span className={`status status--${project.status}`}>
      <span className="status__dot" aria-hidden="true" />
      {statusLabel[project.status]}
    </span>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" aria-label="Tech stack">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

function Visual({ project, hash, sizes }: { project: Project; hash?: string; sizes: string }) {
  if (project.image) {
    return <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes={sizes} />;
  }
  return hash ? <Fingerprint className="shot__fingerprint" hex={hash} /> : null;
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.url) return null;
  return (
    <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
      {project.linkLabel ?? "Visit site"}
      <span className="visually-hidden"> for {project.title} (opens in a new tab)</span>
    </a>
  );
}

export default function Work({ titleHashes }: Props) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title" id="work-title">
            Selected work
          </h2>
          <p className="section__intro">Products I have built and shipped, most recent first.</p>
        </header>

        <div className="featured">
          {featured.map((p) => (
            <article className="feature" key={p.title}>
              <div className="shot shot--large">
                <Visual project={p} hash={titleHashes[p.title]} sizes="(min-width: 960px) 620px, 100vw" />
              </div>
              <div className="feature__body">
                <p className="feature__kind">{p.kind}</p>
                <h3 className="feature__title">{p.title}</h3>
                <div className="feature__meta">
                  <Status project={p} />
                  <span>{p.duration}</span>
                </div>
                <p className="feature__details">{p.details ?? p.summary}</p>
                <Stack items={p.stack} />
                <ProjectLink project={p} />
              </div>
            </article>
          ))}
        </div>

        <h3 className="list-title">More projects</h3>
        <ul className="project-list">
          {rest.map((p) => (
            <li className="project-row" key={p.title}>
              <div className="shot shot--thumb">
                <Visual project={p} hash={titleHashes[p.title]} sizes="200px" />
              </div>
              <div className="project-row__main">
                <h4 className="project-row__title">{p.title}</h4>
                <p className="project-row__kind">
                  {p.kind}, {p.duration}
                </p>
                <p className="project-row__summary">{p.summary}</p>
                <Stack items={p.stack} />
              </div>
              <div className="project-row__side">
                <Status project={p} />
                <ProjectLink project={p} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
