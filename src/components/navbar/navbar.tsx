import LanguageSelector from "./language-selector";
import MobileNavbar from "./mobile-navbar";
import Link from "next/link";
import GoTopButton from "../go-top-button";
import { Button } from "@base-ui/react";
import ThemeSelector from "./theme-selector";
import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";
import { navigationItems } from "./navigation-items";
import Logo from "../logo";
import Container from "../container";

export default async function Navbar() {
  const t = await getTranslations("navbar");
  return (
    <>
      <header id="top">
        <nav className="fixed top-0 left-0 z-10 hidden w-full lg:block">
          <Container className="flex items-center justify-between py-2">
            {/* left side: logo & navigation links */}
            <div className="flex justify-center items-center gap-8">
              <Logo width={220} height={220} />

              {/* central side: navigation links */}
              <ul className="flex items-center gap-8">
                {navigationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="nav-link flex items-center gap-2"
                      >
                        <Icon size={18} aria-hidden="true" />
                        {t(item.label)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* right side: language CTA */}
            <div className="flex items-center gap-8">
              <ThemeSelector />
              <LanguageSelector />

              <Button
                nativeButton={false}
                className="
                group
                relative inline-flex items-center justify-center
                overflow-hidden text-nowrap
                border border-foreground 
                bg-transparent
                px-6 py-3
                text-base font-bold text-foreground
                transition-colors duration-300
                hover:text-background
                before:absolute before:inset-0 before:w-0 before:bg-primary
                before:transition-[width] before:duration-300 before:ease-in-out
                hover:before:w-full
              "
                render={
                  <Link href="#contact">
                    <span className="relative z-10 flex items-center gap-2">
                      <Mail size={18} aria-hidden="true" />
                      {t("contact")}
                    </span>
                  </Link>
                }
              />
            </div>
          </Container>
        </nav>
        <MobileNavbar />
      </header>

      <GoTopButton />
    </>
  );
}
