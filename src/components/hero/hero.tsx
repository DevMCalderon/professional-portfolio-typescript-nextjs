import { Check, ChevronDown, FolderCode, Mail } from "lucide-react";
import Link from "next/link";
import HeroAction from "./hero-action";
import { getTranslations } from "next-intl/server";
import Container from "../container";

const actions = [
  {
    href: "#contact",
    translationKey: "contact",
    icon: Mail,
    primary: true,
  },
  {
    href: "#projects",
    translationKey: "projects",
    icon: FolderCode,
  },
];

export default async function Hero() {
  const t = await getTranslations("hero");

  const benefits = [
    "easyToUse",
    "adaptedToWorkflow",
    "professionalDevelopment",
  ];

  return (
    <section id="home">
      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <p className="text-center text-[7rem]/25 font-bold tracking-wide text-pretty">
            <span className="font-extralight">{t("titlePrefix")}</span>{" "}
            {t("titleMiddle")}{" "}
            <span className="text-primary italic">{t("titleHighlight")}</span>
          </p>

          <p className="mt-10 w-10/12 text-center text-2xl/9 text-muted-foreground text-pretty">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg text-muted-foreground">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 p-1">
                  <Check size={15} className="text-primary" />
                </span>
                {t(`benefits.${benefit}`)}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {actions.map((action) => (
              <HeroAction
                key={action.href}
                {...action}
                label={t(`actions.${action.translationKey}`)}
              />
            ))}
          </div>
        </div>

        <Link
          href="#profile"
          aria-label={t("scrollToProfile")}
          className="animate-updown mt-[-5vw] flex justify-center"
        >
          <ChevronDown size={50} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
