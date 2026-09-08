import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      id="home"
      className="dark:bg-[linear-gradient(0deg,rgba(70,111,149,0)_0%,rgba(39,32,94,0.28)_20%,rgba(50,27,124,0.28)_55%,rgba(49,25,122,0.5)_95%)]"
    >
      {/* contenido del hero */}
      <div className="max-w-8/12 mx-auto flex min-h-screen items-center justify-center">
        <p className="text-center text-6xl/22 font-bold tracking-wider text-pretty">
          CONSTRUYAMOS JUNTOS
        </p>
      </div>
      {/* Enlace para continuar (arrow down) */}
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
