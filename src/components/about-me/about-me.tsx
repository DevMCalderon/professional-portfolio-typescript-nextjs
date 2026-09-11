import Link from "next/link";
import Container from "../container";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="profile">
      <Container className="flex items-center justify-between">
        {/* left side */}
        <div className="w-1/2">
          <p>¿Quién está detrás de esas soluciones?</p>
          <h1>Martín Calderón: Ingeniero en Software</h1>

          <p>
            Desarrollador Full-Stack especializado en Next.js, Laravel y
            arquitectura de software con +3 años de experiencia freelance
            construyendo software con tecnologías de última generación.
          </p>

          <ul>
            <li>
              Me gustan los retos, me gusta la incomodidad. Mi ley de vida es:
              "Si te propones algo, trabaja con todo lo que tienes hasta
              lograrlo."
            </li>
            <li>
              Experiencia creando plataformas ecommerce, sistemas de gestión
              para universidades, veterinarias, cafeterías y otros negocios.
            </li>
            <li>
              Trabajo en todas las fases del desarrollo: levantamiento de
              requisitos, diseño, implementación, pruebas y despliegue.
            </li>
            <li>Comunicación proactiva con clientes y equipos remotos.</li>
            <li>Enfocado en la calidad.</li>
            <li>
              Apasionado de la ingeniería. Aspiro a dominar todo lo necesario
              para construir software de alto nivel.
            </li>
            <li>
              En la actualidad, dedico la mayor parte de mi tiempo al desarrollo
              de habilidades que potencien mi desempeño profesional.
            </li>
          </ul>

          {/* main links */}
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

          {/* other links */}
          <nav aria-label="Otros enlaces de interés">
            <Link href="...">LinkedIn</Link>
            <Link href="...">GitHub</Link>
          </nav>
        </div>

        {/* right side */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/images/profile.png"
            alt="Martín Calderón"
            width={280}
            height={280}
          />
        </div>
      </Container>
    </section>
  );
}
