import Image from "next/image";
import { Button, SocialIcon } from "@/components/ui";
import { clients } from "@/lib/content";
import { CV_FILENAME, CV_PATH, OWNER, socials } from "@/lib/site";

const followOn = socials.filter((s) => ["github", "linkedin", "x", "instagram"].includes(s.key));

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="about">
        <div className="about__photo">
          <Image src="/images/Delight.jpeg" alt={`Portrait of ${OWNER}`} fill sizes="(min-width: 810px) 469px, 92vw" />
        </div>
        <div className="about__body">
          <h2 className="about__title" id="about-title">
            About Me
          </h2>
          <p className="about__name">{OWNER}</p>
          <p>
            I&apos;m a full-stack engineer in Lagos with six years of building secure, scalable products for clients
            anywhere. I work across the stack: Next.js, React and TypeScript on the front end; Laravel, Django, FastAPI
            and Node.js behind it; Flutter and React Native on mobile.
          </p>
          <p>
            Security shapes how I build. I hold a B.Sc. in Cyber Security, and my work now extends into Web3, with
            Solidity contracts and wallet-connected apps, and into AI, putting LLMs and machine-learning models into
            real products.
          </p>
          <ul className="about__social" aria-label="Find me online">
            {followOn.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                  <SocialIcon name={s.key} size={30} />
                </a>
              </li>
            ))}
          </ul>
          <div className="about__actions">
            <Button href="#contact">Get In Touch</Button>
            <Button href={CV_PATH} variant="dark" download={CV_FILENAME}>
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="clients">
        <p className="clients__label">
          Clients
          <br />
          Worked With
        </p>
        <div className="clients__marquee">
          <ul className="clients__track">
            {[...clients, ...clients].map((c, i) => (
              <li key={i} aria-hidden={i >= clients.length}>
                <Image src={c.logo} alt={i < clients.length ? c.name : ""} width={62} height={62} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
