import { Check, ChevronDown, FolderCode, Mail } from "lucide-react";
import Link from "next/link";
import BannerAction from "./banner-action";

const benefits = [
  "Fácil de usar",
  "Adaptado a su estilo de trabajo",
  "Calidad garantizada",
];

const actions = [
  {
    href: "#contact",
    label: "Contáctenos",
    icon: Mail,
    primary: true,
  },
  {
    href: "#projects",
    label: "Vea nuestros proyectos",
    icon: FolderCode,
  },
];

export default function Banner() {
  return (
    <section
      id="home"
      className="dark:bg-[linear-gradient(0deg,rgba(70,111,149,0)_0%,rgba(39,32,94,0.28)_20%,rgba(50,27,124,0.28)_55%,rgba(49,25,122,0.5)_95%)]"
    >
      <div className="mx-auto flex min-h-screen max-w-8/12 flex-col items-center justify-center">
        <p className="text-center text-[7rem]/25 font-bold tracking-wide text-pretty">
          <span className="font-extralight">Construyamos</span> Juntos Su{" "}
          <span className="text-primary italic">App Perfecta</span>
        </p>

        <p className="mt-10 w-10/12 text-center text-2xl/9 text-muted-foreground text-pretty">
          Optimice los procesos más tediosos de su empresa con solo un click.
          Nuestro equipo de especialistas ofrece consultoría y soluciones
          digitales modernas para todo tipo de problemas empresariales, sin
          anticipos.
        </p>

        <div className="mt-10 flex gap-4">
          {actions.map((action) => (
            <BannerAction key={action.href} {...action} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-base text-muted-foreground">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 p-1">
                <Check size={15} className="text-primary" />
              </span>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <Link
        href="#profile"
        aria-label="Go to the profile section"
        className="animate-updown mt-[-5vw] flex justify-center"
      >
        <ChevronDown size={50} />
      </Link>
    </section>
  );
}
