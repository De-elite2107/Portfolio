import type { GetStaticProps } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MotionLayer from "@/components/MotionLayer";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyMe from "@/components/WhyMe";
import Work from "@/components/Work";
import { sha256Hex } from "@/lib/fingerprint";
import { projects } from "@/lib/projects";
import { OWNER } from "@/lib/site";

type Props = {
  nameHash: string;
  titleHashes: Record<string, string>;
  year: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const hashes = await Promise.all(projects.map((p) => sha256Hex(p.title)));
  return {
    props: {
      nameHash: await sha256Hex(OWNER),
      titleHashes: Object.fromEntries(projects.map((p, i) => [p.title, hashes[i]])),
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
      <Nav logoHash={nameHash} />
      <main>
        <Hero />
        <Services />
        <Work titleHashes={titleHashes} />
        <WhyMe nameHash={nameHash} />
        <Process />
        <About />
        <Stats />
        <Testimonials />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <SiteFooter year={year} logoHash={nameHash} />
      <MotionLayer />
    </>
  );
}
