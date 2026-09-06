import LanguageSelector from "./language-selector";
import MobileNavbar from "./mobile-navbar";
import Link from "next/link";
import GoTopButton from "../go-top-button";
import { Button } from "@base-ui/react";
import Image from "next/image";
import ThemeSelector from "./theme-selector";
import { FolderCode, House, Mail, UserRound, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  const t = await getTranslations("navbar");
  return (
    <header className="w-full" id="top">
      <nav
        className="fixed top-0 z-10 w-full py-2 transition-all duration-800 ease-in-out
          before:absolute before:inset-0 before:-z-10
          before:content-['']
          before:transition-opacity before:duration-500
        "
      >
        <div className="max-w-11/12 lg:max-w-6xl flex items-center justify-between mx-auto">
          {/* left side: logo & navigation links */}
          <div className="flex justify-center items-center gap-8">
            <Link href={"/"}>
              <Image
                loading="eager"
                src={"/images/logo.png"}
                alt="Logo de Calderón"
                width={160}
                height={160}
              />
            </Link>

            {/* central side: navigation links */}
            <ul className="hidden lg:flex items-center gap-8">
              <li>
                <Link href={"/"} className="nav-link flex items-center gap-2">
                  <House size={18} />
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={"#skills"}
                  className="nav-link flex items-center gap-2"
                >
                  <Wrench size={18} />
                  {t("skills")}
                </Link>
              </li>
              <li>
                <Link
                  href={"#projects"}
                  className="nav-link flex items-center gap-2"
                >
                  <FolderCode size={18} />
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href={"#about"}
                  className="nav-link flex items-center gap-2"
                >
                  <UserRound size={18} />
                  {t("aboutMe")}
                </Link>
              </li>
            </ul>
          </div>

          {/* right side: language CTA */}
          <div className="flex items-center gap-8">
            <ThemeSelector />
            <LanguageSelector />
            <Button
              nativeButton={false}
              className="group relative inline-flex items-center justify-center text-nowrap overflow-hidden border 
                text-foreground border-foreground bg-transparent px-6 py-3 text-base font-bold transition-colors
                duration-300 hover:text-background
                
                before:absolute before:inset-0 before:w-0 before:bg-primary before:transition-[width] 
                before:duration-300 before:ease-in-out hover:before:w-full"
              render={
                <Link href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail size={18} />
                    {t("contact")}
                  </span>
                </Link>
              }
            ></Button>
          </div>
        </div>
      </nav>
      <MobileNavbar />
      <GoTopButton />
    </header>
  );
}
