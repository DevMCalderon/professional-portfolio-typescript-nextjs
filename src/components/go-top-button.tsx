import { CircleArrowUp } from "lucide-react";

export default function GoTopButton() {
  return (
    <a
      href="#top"
      aria-label="Go back to top"
      className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center rounded-full
      border border-foreground bg-background text-foreground opacity-70 shadow-md transition-all
      duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-background"
    >
      <CircleArrowUp size={24} />
    </a>
  );
}
