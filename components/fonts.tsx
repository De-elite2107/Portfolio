import { Archivo, JetBrains_Mono } from "next/font/google";

// Archivo's width axis carries the display treatment: headings are set
// expanded, body copy at normal width. JetBrains Mono is only for real code
// (the hash and tech stacks).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${archivo.variable} ${mono.variable}`;
