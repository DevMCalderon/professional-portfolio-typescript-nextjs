import { Button } from "@base-ui/react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface BannerActionProps {
  href: string;
  label: string;
  icon: LucideIcon;
  primary?: boolean;
}

export default function BannerAction({
  href,
  label,
  icon: Icon,
  primary = false,
}: BannerActionProps) {
  return (
    <Button
      nativeButton={false}
      className={`inline-flex items-center justify-center rounded-full border border-foreground px-6 py-3 text-base font-bold transition-colors
        ${
          primary
            ? "bg-primary/80 text-primary-foreground hover:bg-primary"
            : "text-foreground hover:bg-primary/30"
        }`}
      render={
        <Link href={href}>
          <span className="flex items-center gap-2">
            <Icon size={18} />
            {label}
          </span>
        </Link>
      }
    />
  );
}
