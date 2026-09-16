import { getTranslations } from "next-intl/server";
import { skills } from "@/data/skills";
import SkillItem from "./skill-item";
import Container from "../container";
import { Wrench } from "lucide-react";

export default async function Skills() {
  const t = await getTranslations("skills");

  const groupedSkills = skills.reduce<Record<string, typeof skills>>(
    (groups, skill) => {
      groups[skill.group] ??= [];
      groups[skill.group].push(skill);

      return groups;
    },
    {},
  );

  const mainSkills = groupedSkills.mainSkills ?? [];

  const complementaryGroups = Object.entries(groupedSkills).filter(
    ([group]) => group !== "mainSkills",
  );

  return (
    <section
      id="skills"
      className="mt-14 overflow-hidden w-11/12 mx-auto rounded-3xl border border-primary bg-background 
          shadow-md/[0.04] backdrop-blur-sm px-6 md:px-4 py-18"
    >
      <Container className="max-w-375 flex flex-col gap-12 text-center">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold md:text-4xl text-primary flex gap-2 items-center">
            {t("title")}
          </h2>
        </div>

        {/* Main skills */}
        <section
          className="
          flex flex-col gap-6 min-w-0 rounded-3xl border border-border bg-background p-6 
          shadow-md/[0.04] backdrop-blur-sm
          "
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            {t("groups.mainSkills")}
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {mainSkills.map(({ translationKey, icon: Icon, color }) => (
              <SkillItem
                key={translationKey}
                label={t(`items.${translationKey}`)}
                icon={Icon}
                color={color}
                featured
              />
            ))}
          </div>
        </section>

        {/* Complementary skills */}
        <div className="grid gap-6 md:grid-cols-2">
          {complementaryGroups.map(([group, groupSkills]) => (
            <section
              key={group}
              className="flex min-w-0 flex-col gap-5 rounded-3xl border border-border bg-background p-6 text-left shadow-md/[0.04]"
            >
              <div>
                <h3 className="text-2xl font-bold">{t(`groups.${group}`)}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {groupSkills.map(({ translationKey, icon: Icon, color }) => (
                  <SkillItem
                    key={translationKey}
                    label={t(`items.${translationKey}`)}
                    icon={Icon}
                    color={color}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
