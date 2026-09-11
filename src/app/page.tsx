import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Skills from "@/components/skills/skills";
import ProjectsSection from "@/components/projects/projects-section";
import AboutMe from "@/components/about-me/about-me";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="page-background">
          <Banner />
          <Skills />
        </div>
        <ProjectsSection />
        <AboutMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
