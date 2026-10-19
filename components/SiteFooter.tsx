import SilkCanvas from "@/components/SilkCanvas";
import { LogoMark, SocialIcon } from "@/components/ui";
import { BRAND, navLinks, socials } from "@/lib/site";

export default function SiteFooter({ year, logoHash }: { year: number; logoHash: string }) {
  return (
    <footer className="footer">
      <div className="footer__main">
        <SilkCanvas variant="footer" />
        <div className="footer__content">
          <a className="brand" href="#top">
            <LogoMark hash={logoHash} />
            <span className="brand__name">{BRAND}</span>
          </a>
          <p className="footer__tagline">
            Secure web, mobile, Web3 and AI products, built end to end in Lagos for clients anywhere.
          </p>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul className="socials socials--center">
            {socials.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                  <SocialIcon name={s.key} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        <p>
          &copy; {year} {BRAND}. All rights reserved.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
