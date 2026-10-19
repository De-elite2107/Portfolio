import type { ReactNode } from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Fingerprint from "@/components/Fingerprint";
import type { SocialKey } from "@/lib/site";

type ButtonProps = {
  href: string;
  children: string;
  variant?: "red" | "dark";
  className?: string;
  external?: boolean;
  download?: string;
};

// Pill button whose label rolls up to a second copy on hover.
export function Button({ href, children, variant = "red", className, external, download }: ButtonProps) {
  return (
    <a
      className={`btn btn--${variant}${className ? ` ${className}` : ""}`}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className="btn__roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={`pill${className ? ` ${className}` : ""}`}>{children}</span>;
}

export function SectionHead({ id, label, title, intro }: { id: string; label: string; title: string; intro?: string }) {
  return (
    <header className="section-head" data-reveal="up">
      <Pill>{label}</Pill>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      {intro && <p className="section-head__intro">{intro}</p>}
    </header>
  );
}

// The brand mark: the SHA-256 fingerprint of the owner's name on a red tile.
export function LogoMark({ hash, className }: { hash: string; className?: string }) {
  return (
    <span className={`logo-mark${className ? ` ${className}` : ""}`} aria-hidden="true">
      <Fingerprint hex={hash} />
    </span>
  );
}

const socialIcons = {
  x: XLogo,
  instagram: InstagramLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  whatsapp: WhatsappLogo,
  telegram: TelegramLogo,
} satisfies Record<SocialKey, unknown>;

export function SocialIcon({ name, size = 24 }: { name: SocialKey; size?: number }) {
  const Icon = socialIcons[name];
  return <Icon size={size} weight="regular" aria-hidden="true" />;
}
