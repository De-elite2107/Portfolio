import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, SealCheck } from "@phosphor-icons/react/dist/ssr";
import Fingerprint from "@/components/Fingerprint";
import { SectionHead } from "@/components/ui";
import { categoryLabel, projects, statusLabel, type Project, type ProjectCategory } from "@/lib/projects";

const INITIAL = 6;
const CARD_SIZES = "(min-width: 1200px) 363px, (min-width: 810px) 45vw, 92vw";
const filters: ("all" | ProjectCategory)[] = ["all", "web", "apps", "web3", "ai"];

type Props = {
  // SHA-256 of each project title, drawn for projects without a screenshot.
  titleHashes: Record<string, string>;
};

function Visual({ project, hash }: { project: Project; hash?: string }) {
  if (project.poster) {
    return (
      <div className="pcard__poster">
        <Image src={project.poster} alt={`${project.title} on a phone`} fill sizes={CARD_SIZES} />
      </div>
    );
  }
  if (project.image) {
    // Landscape screenshot: shown whole, over a blurred copy that fills the card.
    return (
      <div className="pcard__landscape">
        <Image className="pcard__backdrop" src={project.image} alt="" fill sizes="120px" />
        <div className="pcard__shot">
          <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes={CARD_SIZES} />
        </div>
      </div>
    );
  }
  return hash ? (
    <div className="pcard__print">
      <Fingerprint hex={hash} />
    </div>
  ) : null;
}

function Avatar({ project, hash }: { project: Project; hash?: string }) {
  if (project.logo) return <Image className="pcard__avatar" src={project.logo} alt="" width={38} height={38} />;
  return <span className="pcard__avatar pcard__avatar--print">{hash && <Fingerprint hex={hash} />}</span>;
}

function Card({ project, hash }: { project: Project; hash?: string }) {
  return (
    <article className="pcard">
      <Visual project={project} hash={hash} />
      <div className="pcard__top">
        <Avatar project={project} hash={hash} />
        <h3 className="pcard__title">{project.title}</h3>
        {project.status === "live" && <SealCheck className="pcard__seal" size={18} weight="fill" aria-label="Live" />}
      </div>
      <div className="pcard__bottom">
        <p className="pcard__meta">
          <span className={`status status--${project.status}`}>
            <span className="status__dot" aria-hidden="true" />
            {statusLabel[project.status]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.duration}</span>
        </p>
        <p className="pcard__kind">{project.kind}</p>
        <p className="pcard__summary">{project.summary}</p>
        <p className="pcard__stack">
          <span className="visually-hidden">Built with </span>
          {project.stack.join(" · ")}
        </p>
        {project.url && (
          <a className="pcard__link" href={project.url} target="_blank" rel="noopener noreferrer">
            {project.linkLabel ?? "Visit site"}
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            <span className="visually-hidden"> for {project.title} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Work({ titleHashes }: Props) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [expanded, setExpanded] = useState(false);

  const matching = filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));
  const shown = expanded ? matching : matching.slice(0, INITIAL);

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <SectionHead
        id="work-title"
        label="Projects"
        title="Selected Work"
        intro="Products I've designed, built and shipped for clients and for myself, from live platforms to confidential systems."
      />
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter${filter === f ? " is-active" : ""}`}
            aria-pressed={filter === f}
            onClick={() => {
              setFilter(f);
              setExpanded(false);
            }}
          >
            {f === "all" ? "All" : categoryLabel[f]}
          </button>
        ))}
      </div>
      <div className="work-grid" aria-live="polite">
        {shown.map((p) => (
          <Card key={p.title} project={p} hash={titleHashes[p.title]} />
        ))}
      </div>
      {matching.length > INITIAL && (
        <div className="work-more">
          <button type="button" className="btn btn--dark" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
            <span className="btn__roll">
              <span>{expanded ? "Show fewer" : `Show all ${matching.length} projects`}</span>
              <span aria-hidden="true">{expanded ? "Show fewer" : `Show all ${matching.length} projects`}</span>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
