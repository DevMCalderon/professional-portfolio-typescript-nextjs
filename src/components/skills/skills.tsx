import Container from "../container";
import { getTranslations } from "next-intl/server";
import { skills } from "@/data/skills";

export default async function Skills() {
  const t = await getTranslations("skills");
  return (
    <section id="skills" className="mt-20">
      <Container className="flex flex-col max-w-[1600px] overflow-clip gap-6 py-16 px-10 items-center text-center">
        <h2 className="text-4xl">Habilidades</h2>
        {/* main skills */}
        <h3 className="text-2xl">Especializado en:</h3>
        <div className="flex gap-4">
          {skills.map(({ translationKey, icon: Icon, color }) => (
            <div
              key={translationKey}
              className="flex items-center gap-2 rounded-xl border px-6 py-2 text-xl"
              style={{
                backgroundColor: `${color}20`,
                borderColor: color,
                color,
              }}
            >
              <Icon size={25} aria-hidden="true" />
              {t(`items.${translationKey}`)}
            </div>
          ))}
        </div>
        {/* complementary skills */}
        <div>
          <h3 className="text-2xl">Tecnologías complementarias:</h3>
        </div>
      </Container>
    </section>
  );
}
