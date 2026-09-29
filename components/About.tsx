import Image from "next/image";
import { spokenLanguages } from "@/lib/capabilities";
import { CV_FILENAME, CV_PATH, EMAIL } from "@/lib/site";

export default function About() {
  return (
    <section className="section section--rule" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__photo">
          <Image src="/images/Delight.jpeg" alt="Portrait of Delight Adediran" fill sizes="(min-width: 960px) 320px, 60vw" />
        </div>
        <div className="about__body">
          <h2 className="section__title" id="about-title">
            About
          </h2>
          <p>
            I&apos;m Delight, a full-stack developer and robotics engineer with over five years of experience
            building secure, scalable web and mobile applications. I work across the stack: Next.js, TypeScript and
            React on the front end; Laravel, Django, FastAPI and Node.js on the back end; PostgreSQL, Docker, CI/CD and
            AWS underneath.
          </p>
          <p>
            Security shapes how I build. I graduated with a B.Sc. in Cyber Security on 7 August 2026, and I design
            with role-based access, hardened defaults and monitoring in place from day one.
          </p>
          <p>
            My work now also extends into Web3, writing Solidity contracts and wallet-connected apps, and into AI,
            putting LLMs and machine-learning models into real products. I also build cross-platform mobile apps with
            Flutter.
          </p>
          <dl className="facts">
            <div>
              <dt>Based in</dt>
              <dd>Lagos, Nigeria</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>B.Sc. Cyber Security, 2026</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{spokenLanguages}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
          </dl>
          <a className="button button--dark" href={CV_PATH} download={CV_FILENAME}>
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
