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
          ? "h-auto gap-3 px-10 py-3 text-xl [&>svg]:size-9"
          : "h-auto max-w-full whitespace-normal text-left gap-2 px-5 py-2 text-base [&>svg]:size-5"
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
