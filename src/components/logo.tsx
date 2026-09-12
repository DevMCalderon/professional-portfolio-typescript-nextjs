import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 120, height = 120 }: LogoProps) {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/images/logo.png"
        alt="Logo de Martín Calderón"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
