import type { IconType } from "react-icons";
import { Badge } from "@/components/ui/badge";

interface SkillItemProps {
  label: string;
  icon?: IconType;
  color: string;
  featured?: boolean;
}

export default function SkillItem({
  label,
  icon: Icon,
  color,
  featured = false,
}: SkillItemProps) {
  return (
    <Badge
      variant="outline"
      className={
        featured
          ? "gap-3 rounded-2xl px-10 py-7 text-xl [&>svg]:size-9"
          : "gap-2 px-5 py-4 text-base [&>svg]:size-5"
      }
      style={{
        backgroundColor: `${color}20`,
        borderColor: color,
        color,
      }}
    >
      {Icon && <Icon aria-hidden="true" />}

      {label}
    </Badge>
  );
}
