// Brand, contact details and file paths used in more than one component.
export const BRAND = "De-eliteTech";
export const OWNER = "Delight Adediran";
export const EMAIL = "delightadediran21@gmail.com";
export const CAL_URL = "https://cal.com/delight-adediran-jnbkma/15min";
export const CV_PATH = "/delight_resume.pdf";
export const CV_FILENAME = "Delight Adediran CV.pdf";

export type SocialKey = "x" | "instagram" | "github" | "linkedin" | "whatsapp" | "telegram";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "x", label: "X", href: "https://x.com/DelightAdediran" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/de_elite21/" },
  { key: "github", label: "GitHub", href: "https://github.com/De-elite2107" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/delight-adediran-7151b022a/" },
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.link/3bl1ku" },
  { key: "telegram", label: "Telegram", href: "https://t.me/De_elite2107" },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];
