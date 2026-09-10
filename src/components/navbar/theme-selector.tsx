"use client";

import { useTheme } from "@wrksz/themes/client";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function ThemeSelector() {
  const t = useTranslations("navbar");

  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t("changeTheme")}
      className={"text-foreground hover:text-primary"}
    >
      {resolvedTheme === "dark" ? (
        <Sun aria-hidden="true" />
      ) : (
        <Moon aria-hidden="true" />
      )}
    </Button>
  );
}
