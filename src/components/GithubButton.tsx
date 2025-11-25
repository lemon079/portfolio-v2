import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface GithubButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export function GithubButton({
  href,
  className,
  label = "Code",
}: GithubButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "group flex items-center gap-2 px-3 py-1.5",
        "text-sm font-medium rounded-lg",
        "bg-background border border-text-muted border-dotted",
        "hover:bg-muted hover:border-border",
        "transition-all duration-300",
        className
      )}
    >
      <Github
        size={16}
        className="text-muted-foreground group-hover:text-foreground transition-colors"
      />
      <span className="text-border">|</span>
      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </Link>
  );
}
