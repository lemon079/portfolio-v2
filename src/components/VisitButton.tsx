import Link from "next/link";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisitButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export function VisitButton({
  href,
  className,
  label = "Visit",
}: VisitButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "group flex items-center gap-2 px-3 py-1.5",
        "text-sm font-medium rounded-lg",
        "bg-accent-blue/10 text-accent-blue border border-accent-blue/20",
        "hover:bg-accent-blue/20 hover:scale-105",
        "transition-all duration-300",
        className
      )}
    >
      <Globe size={16} />
      <span className="text-accent-blue/30">|</span>
      <span>{label}</span>
    </Link>
  );
}
