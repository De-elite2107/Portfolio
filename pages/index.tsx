import type { GetStaticProps } from "next";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Hero, { SIGNED_NAME } from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Work from "@/components/Work";
import { sha256Hex } from "@/lib/fingerprint";
import { projects } from "@/lib/projects";

type Props = {
  nameHash: string;
  titleHashes: Record<string, string>;
  year: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const imageless = projects.filter((p) => !p.image);
  const hashes = await Promise.all(imageless.map((p) => sha256Hex(p.title)));
  return {
    props: {
      nameHash: await sha256Hex(SIGNED_NAME),
      titleHashes: Object.fromEntries(imageless.map((p, i) => [p.title, hashes[i]])),
      year: new Date().getFullYear(),
    },
  };
};

export default function Home({ nameHash, titleHashes, year }: Props) {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <SiteHeader />
      <main>
        <Hero nameHash={nameHash} />
        <Work titleHashes={titleHashes} />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <SiteFooter year={year} />
    </>
  );
}
