"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
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

export default function MobileNavbar() {
  const t = useTranslations("navbar");

  return (
    <div className="fixed top-0 right-0 z-50 lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("menu")}
              className="text-foreground hover:text-primary"
            >
              <Menu />
            </Button>
          }
        />

        <SheetContent
          side="right"
          className="w-72 border-l border-border bg-background"
        >
          <SheetHeader>
            <SheetTitle>{t("menu")}</SheetTitle>
          </SheetHeader>

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
                          <Icon size={20} />
                          {t(item.label)}
                        </Link>
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
