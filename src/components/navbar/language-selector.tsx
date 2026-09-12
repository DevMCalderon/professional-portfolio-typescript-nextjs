"use client";

import { Check, Languages } from "lucide-react";
import { useRouter } from "next/navigation";

import { setLocale } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations, useLocale } from "next-intl";

const locales = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
] as const;

type Locale = (typeof locales)[number]["value"];

export default function LanguageSelector() {
  const t = useTranslations("navbar");

  const locale = useLocale();
  const router = useRouter();

  async function handleLocaleChange(newLocale: Locale) {
    if (newLocale === locale) return;

    await setLocale(newLocale);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("language")}
            className={"text-foreground hover:text-primary"}
          >
            <Languages />
          </Button>
        }
      />

      <DropdownMenuContent
        align="end"
        className={
          "min-w-30overflow-hidden border-border bg-popover p-1 shadow-md"
        }
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 py-1.5 font-semibold text-muted-foreground text-base">
            {t("language")}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {locales.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => handleLocaleChange(item.value)}
              className={"cursor-pointer rounded-md p-2 transition-colors"}
            >
              {item.label}

              {locale === item.value && <Check className="ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
