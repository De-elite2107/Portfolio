import Image from "next/image";
import Reel from "@/components/Reel";
import SilkCanvas from "@/components/SilkCanvas";
import { Button } from "@/components/ui";
import { CLIENT_COUNT, clients } from "@/lib/content";

const reel = [
  { src: "/images/work/d-threebubbles.jpg", alt: "ThreeBubbles car-wash membership site" },
  { src: "/images/work/d-hightower.jpg", alt: "Hightower Global Church website" },
  { src: "/images/work/d-citispa.jpg", alt: "Citi Spa & Sauna website" },
  { src: "/images/portfolio/goldencity.png", alt: "GoldenCity property marketplace" },
];

const avatars = clients.slice(0, 3);
// "10+" clients, three shown as logos.
const remaining = parseInt(CLIENT_COUNT, 10) - avatars.length;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <SilkCanvas variant="hero" />
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="badge" data-reveal="up">
            <span className="badge__dot" aria-hidden="true" />
            Available for new projects.
          </p>
          <h1 className="hero__title" data-reveal="rise">
            Secure Software,
            <br />
            Built End to End.
          </h1>
          <p className="hero__lede" data-reveal="rise">
            Full-stack engineer in Lagos building web, mobile, Web3 and AI products for clients anywhere, with security
            built in from day one.
          </p>
          <div className="hero__actions" data-reveal="rise">
            <Button href="#work">View Work</Button>
            <Button href="#pricing" variant="dark">
              See Pricing
            </Button>
          </div>
          <div className="proof" data-reveal="rise">
            <ul className="proof__avatars" aria-label="Some of the clients I have worked with">
              {avatars.map((c) => (
                <li key={c.name}>
                  <Image src={c.logo} alt={c.name} width={45} height={45} />
                </li>
              ))}
              <li className="proof__more" aria-hidden="true">
                +{remaining}
              </li>
            </ul>
            <p className="proof__text">Worked with {CLIENT_COUNT} clients</p>
          </div>
        </div>

        <div className="hero__media">
          <div className="glow-card">
            <span className="glow-card__light" aria-hidden="true" />
            <div className="glow-card__inner">
              <Reel images={reel} sizes="(min-width: 810px) 460px, 92vw" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
