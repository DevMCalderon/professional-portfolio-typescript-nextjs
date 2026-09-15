import { getTranslations } from "next-intl/server";
import { skills } from "@/data/skills";
import SkillItem from "./skill-item";
import Container from "../container";

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
      className="bg-background mt-20 border-primary border-y overflow-hidden"
    >
      <Container className="flex max-w-[1600px] flex-col gap-12 px-6 py-20 text-center md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl text-primary">
            {t("title")}
          </h2>
        </div>

        {/* Main skills */}
        <section className="flex flex-col gap-6">
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
              className="flex min-w-0 flex-col gap-5 rounded-3xl border border-border bg-background/60 p-6 text-left shadow-md/[0.04] backdrop-blur-sm"
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
