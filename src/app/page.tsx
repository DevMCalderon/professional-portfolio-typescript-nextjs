import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import ProjectsSection from "@/components/projects/projects-section";
import Profile from "@/components/about-me/profile";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("");
  return (
    <>
      <Navbar />

      <main>
        <div className="image-background page-background">
          <Hero />
          <Profile />
          <Skills />
        </div>
        {/* <ProjectsSection /> */}
        {/* <Contact /> */}
        <Link
          href="https://devmcalderon.github.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="link text-2xl flex justify-center mb-20 px-10 md:px-0"
        >
          {t("buildingMessage")}
        </Link>
      </main>

      {/* <Footer /> */}
    </>
  );
}
