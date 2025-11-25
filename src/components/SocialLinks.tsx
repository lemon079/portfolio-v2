import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  className?: string;
}

export function SocialLinks({ 
  githubUrl = "https://github.com/yourusername", 
  linkedinUrl = "https://linkedin.com/in/yourusername", 
  email = "your.email@gmail.com",
  className 
}: SocialLinksProps) {

  const socials = [
    {
      name: "GitHub",
      href: githubUrl,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: linkedinUrl,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: Mail,
    },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className={cn("flex items-center gap-2", className)}>
        {socials.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors duration-300",
                  "text-text-muted hover:text-text-secondary"
                )}
                aria-label={`Visit ${social.name}`}
              >
                <social.icon size={18} strokeWidth={2} />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-text-muted text-white border-none">
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}