import Link from "next/link";
import Container from "../container";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="profile">
      <Container className="flex items-center justify-between">
        {/* Left side */}
        <div className="w-1/2">
          {/* Presentation */}
          <div>
            <p>¿Quién está detrás de esas soluciones?</p>
            <h1>Martín Calderón: Ingeniero en Software</h1>

            <p>
              Desarrollador Full-Stack especializado en Next.js, Laravel y
              arquitectura de software con +3 años de experiencia freelance
              construyendo software con tecnologías de última generación.
            </p>
          </div>
          {/* Experience */}
          <div>
            <h2>Experiencia</h2>
            <p>
              Experiencia creando plataformas ecommerce y sistemas de gestión
              para universidades, veterinarias, cafeterías y otros negocios.
            </p>
          </div>

          {/* Way of working */}
          <div>
            <h2>Forma de trabajo</h2>
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
          <div>
            <h2>Filosofía</h2>
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

          {/* Main links */}
          <div>
            <Link href={process.env.NEXT_PUBLIC_CV_URL ?? "#"}>
              Descargar mi currículum vitae
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_PORTFOLIO_REPOSITORY_URL ?? "#"}
            >
              GitHubIcon Este sitio fue construido por mí — Ver código fuente
            </Link>
          </div>

          {/* More links */}
          <nav aria-label="Otros enlaces de interés">
            <Link href="...">LinkedIn</Link>
            <Link href="...">GitHub</Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex justify-end">
          {/* TODO: reemplazar por ImageReflection */}
          <Image
            src="/images/profile.png"
            alt="Martín Calderón"
            width={290}
            height={290}
            className="rounded-full border-4 border-background opacity-90 shadow-2xl ml-auto bg-primary w-[70%] md:w-1/2 lg:w-[20rem] mt-16 lg:mt-0 "
          />
        </div>
      </Container>
    </section>
  );
}
