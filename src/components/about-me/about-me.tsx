import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { CodeXml, UserRound } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: process.env.NEXT_PUBLIC_CV_URL ?? "#",
    label: "Currículum vitae",
    icon: UserRound,
  },
  {
    href: process.env.NEXT_PUBLIC_PORTFOLIO_REPOSITORY_URL ?? "#",
    label: "Ver código fuente del sitio",
    icon: CodeXml,
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "#",
    label: "GitHub",
    icon: FaGithub,
  },
];

export default function AboutMe() {
  return (
    <section id="profile" className="mt-20">
      <Container className="flex items-center justify-between bg-background/80 border-primary border py-30 px-20 rounded-3xl">
        {/* Left side */}
        <div className="w-7/12 flex flex-col gap-6 text-lg">
          {/* Presentation */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-primary font-bold">
              ¿Quién está detrás de esas soluciones?
            </p>
            <div className="p-4 bg-primary/10 rounded-4xl flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-pretty">
                <span className="text-accent-foreground">
                  Ingeniero en Software:
                </span>{" "}
                Martín Samuel Calderón Ojeda
              </h1>

              <p>
                Desarrollador Full-Stack especializado en Next.js, Laravel y
                arquitectura de software con +3 años de experiencia freelance
                construyendo software con tecnologías de última generación.
              </p>
            </div>
          </div>
          {/* Experience */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-primary font-bold">Experiencia</h2>
            <p>
              Experiencia creando plataformas ecommerce y sistemas de gestión
              para universidades, veterinarias, cafeterías y otros negocios.
            </p>
          </div>

          {/* Way of working */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-primary font-bold">
              Forma de trabajo
            </h2>
            <ul>
              <li>
                Trabajo en todas las fases del desarrollo: levantamiento de
                requisitos, diseño, implementación, pruebas y despliegue.
              </li>
              <li>Comunicación proactiva con clientes y equipos remotos.</li>
              <li>Enfocado en la calidad.</li>
            </ul>
          </div>

          {/* Philosophy */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-primary font-bold">Filosofía</h2>
            <p>
              Me gustan los retos, me gusta la incomodidad. Mi ley de vida es:
              "Si te propones algo, trabaja con todo lo que tienes hasta
              lograrlo."
            </p>
            <p>
              Apasionado de la ingeniería. Aspiro a dominar todo lo necesario
              para construir software de alto nivel.
            </p>
            <p>
              En la actualidad, dedico la mayor parte de mi tiempo al desarrollo
              de habilidades que potencien mi desempeño profesional.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-5/12 flex justify-end self-start">
          <div>
            {/* TODO: reemplazar por ImageReflection */}
            <Image
              src="/images/profile.png"
              alt="Martín Calderón"
              width={290}
              height={290}
              className="rounded-full border-4 border-background shadow-2xl bg-primary/90 w-[70%] md:w-1/2 lg:w-[18rem] mt-16 lg:mt-0"
            />

            {/* Main links */}
            <div className="mt-6">
              <div className="flex flex-col gap-2">
                {links.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link flex items-center gap-3"
                  >
                    <Icon size={20} aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
