import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} CodebyKaz All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full flex justify-evenly items-center gap-3 bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-105"
      >
        <p>Back to Top</p>
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
