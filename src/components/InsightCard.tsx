import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  variant: "danger" | "success" | "default"; // Maps to your Red/Green styles
  className?: string;
}

export function InsightCard({ 
  title, 
  items, 
  icon: Icon, 
  variant = "default",
  className 
}: InsightCardProps) {
  
  // Define styles based on variant
  const styles = {
    danger: {
      iconBg: "bg-[color-mix(in_srgb,var(--color-accent-rose),transparent_90%)]",
      iconColor: "text-[var(--color-accent-rose)]",
      dotColor: "bg-[var(--color-accent-rose)]",
    },
    success: {
      iconBg: "bg-[color-mix(in_srgb,var(--color-accent-emerald),transparent_90%)]",
      iconColor: "text-[var(--color-accent-emerald)]",
      dotColor: "bg-[var(--color-accent-emerald)]",
    },
    default: {
      iconBg: "bg-[color-mix(in_srgb,var(--color-accent-blue),transparent_90%)]",
      iconColor: "text-[var(--color-accent-blue)]",
      dotColor: "bg-[var(--color-accent-blue)]",
    },
  };

  const activeStyle = styles[variant];

  return (
    <div className={cn("bg-card border border-text-muted/30 rounded-xl p-8 shadow-sm h-full", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={cn("p-3 rounded-lg", activeStyle.iconBg, activeStyle.iconColor)}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-text-secondary">
            <span 
              className={cn(
                "shrink-0 block w-1.5 h-1.5 mt-2.5 rounded-full", 
                activeStyle.dotColor
              )} 
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}