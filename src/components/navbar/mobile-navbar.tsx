"use client";

import Link from "next/link";
import { Mail, Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { navigationItems } from "./navigation-items";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSelector from "./language-selector";
import ThemeSelector from "./theme-selector";
import Logo from "../logo";
import Container from "../container";

export default function MobileNavbar() {
  const t = useTranslations("navbar");

  return (
    <nav className="fixed top-0 right-0 z-50 w-full lg:hidden">
      <Container className="flex items-center justify-between py-2">
        <Logo width={160} height={160} />

        <Sheet>
          {/* Menu trigger */}
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("menu")}
                className="text-foreground hover:text-primary"
              >
                <Menu size={24} aria-hidden="true" />
              </Button>
            }
          />

          <SheetContent
            side="right"
            className="w-72 px-3 border-l border-border bg-background"
          >
            <SheetHeader>
              <SheetTitle>{t("menu")}</SheetTitle>
            </SheetHeader>

            {/* Navigation */}
            <nav className="mt-6">
              <ul className="flex flex-col gap-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href}
                            className="
                            flex items-center gap-3
                            rounded-lg
                            px-3 py-3
                            text-foreground
                            transition-colors
                            hover:bg-primary
                            hover:text-primary-foreground
                          "
                          >
                            <Icon size={20} aria-hidden="true" />
                            {t(item.label)}
                          </Link>
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Controls */}
            <div className="mt-8 border-t border-border pt-6">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="#contact"
                    className="
                      mb-6 flex items-cener justify-center gap-2
                      rounded-lg
                      border border-foreground
                      px-6 py-3
                      font-bold
                      text-foreground
                      transition-colors
                      hover:bg-primary hover:text-primary-foreground
                    "
                  >
                    <Mail size={18} aria-hidden="true" /> {t("contact")}
                  </Link>
                }
              />
              <div className="flex items-center justify-center gap-4">
                <ThemeSelector />
                <LanguageSelector />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
}
