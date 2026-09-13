import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CodeXml, UserRound } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const profileLinks = [
  {
    href: process.env.NEXT_PUBLIC_CV_URL ?? "#",
    translationKey: "resume",
    icon: UserRound,
  },
  {
    href: process.env.NEXT_PUBLIC_PORTFOLIO_REPOSITORY_URL ?? "#",
    translationKey: "sourceCode",
    icon: CodeXml,
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#",
    translationKey: "linkedin",
    icon: FaLinkedin,
  },
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "#",
    translationKey: "github",
    icon: FaGithub,
  },
];

export default async function Profile() {
  const t = await getTranslations("profile");

  return (
    <section id="profile" className="mt-20">
      <Container className="flex bg-background/80 border-primary border rounded-3xl max-w-[1600px] overflow-clip">
        {/* Left side */}
        <div className="w-6/12 flex flex-col gap-6 text-8xl text-background font-bold bg-primary text-center justify-center py-20 px-12 image-background profile-background">
          <p>{t("tagline")}</p>
        </div>

        {/* Right side */}
        <div className="w-6/12 flex flex-col justify-end self-start gap-6 py-24 px-10 text-lg">
          <div className="flex items-center justify-center gap-6">
            {/* TODO: reemplazar por ImageReflection */}
            <Image
              src="/images/profile.png"
              alt="Martín Calderón"
              width={290}
              height={290}
              className="rounded-full border-4 border-background shadow-2xl bg-primary/90 w-[70%] md:w-1/2 lg:w-52 mt-16 lg:mt-0"
            />
            {/* Presentation */}
            <div className="flex flex-col gap-4 rounded-4xl bg-primary/10 p-5">
              <h1 className="text-4xl font-bold text-pretty">
                <span className="text-accent-foreground">
                  {t("titlePrefix")}{" "}
                </span>{" "}
                {t("name")}
              </h1>

              <p>{t("description")} </p>
            </div>
          </div>

          {/* Main links */}
          <div className="mt-6 flex gap-10">
            {profileLinks.map(({ href, translationKey, icon: Icon }) => (
              <Link
                key={translationKey}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="link flex items-center gap-3"
              >
                <Icon size={20} aria-hidden="true" />
                {t(`links.${translationKey}`)}
              </Link>
            ))}
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-primary font-bold">
              {t("experience.title")}
            </h2>
            <p>{t("experience.description")}</p>
          </div>

          {/* Way of working */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-primary font-bold">
              {t("workflow.title")}
            </h2>
            <ul>
              <li>{t("workflow.requirements")}</li>
              <li>{t("workflow.communication")}</li>
              <li>{t("workflow.quality")}</li>
            </ul>
          </div>

          {/* Philosophy */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-primary font-bold">
              {t("philosophy.title")}
            </h2>
            <p>{t("philosophy.challenge")}</p>
            <p>{t("philosophy.engineering")}</p>
            <p>{t("philosophy.currentFocus")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
