import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import ProjectsSection from "@/components/projects/projects-section";
import Profile from "@/components/about-me/profile";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="image-background page-background">
          <Hero />
          <Profile />
          <Skills />
        </div>
        <ProjectsSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
