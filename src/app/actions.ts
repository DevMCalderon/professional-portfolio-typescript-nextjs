"use server";

import { cookies } from "next/headers";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies();

  cookieStore.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}
