import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { Pill, SocialIcon } from "@/components/ui";
import { CAL_URL, EMAIL, socials } from "@/lib/site";

const PHONE = { display: "+234 708 954 7793", href: "tel:+2347089547793" };
const embedSrc = `${CAL_URL}?embed=true&theme=dark&layout=month_view`;

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="contact">
        <div className="contact__info" data-reveal="up">
          <Pill>Contact Us</Pill>
          <h2 className="contact__title" id="contact-title">
            Book a Call
          </h2>
          <p className="contact__intro">
            Pick a time for a free 15-minute call about your project: what you&apos;re building, who it&apos;s for and
            when you need it. Prefer to write? Email or message me any time.
          </p>
          <dl className="contact__channels">
            <div>
              <dt>Email</dt>
              <dd>
                <EnvelopeSimple size={20} aria-hidden="true" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <Phone size={20} aria-hidden="true" />
                <a href={PHONE.href}>{PHONE.display}</a>
              </dd>
            </div>
          </dl>
          <p className="contact__follow">Follow Me On</p>
          <ul className="socials">
            {socials.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                  <SocialIcon name={s.key} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact__calendar">
          <iframe src={embedSrc} title="Book a 15-minute call on Cal.com" loading="lazy" />
          <a className="contact__fallback" href={CAL_URL} target="_blank" rel="noopener noreferrer">
            Calendar not loading? Open it on Cal.com
          </a>
        </div>
      </div>
    </section>
  );
}
