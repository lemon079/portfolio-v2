import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  heading: string;
  subheading: string;
  slug: string;
  imgSrc?: string;
  href?: string;
  github?: string;
  technologies?: string[];
}

export default function ProjectCard({
  heading,
  subheading,
  slug,
  imgSrc,
  href,
  github,
  technologies = [],
}: ProjectCardProps) {
  return (
    <Card
      className="
        group 
        relative 
        bg-background 
        border-text-muted/30
        transition-colors 
        overflow-hidden
        flex flex-col
        h-full
      "
    >
      <div className="flex flex-col h-full">
        {/* Envelope-style image wrapper */}
        {imgSrc && (
          <div
            className="
               relative 
              h-50
              overflow-hidden 
              rounded-t-xl
              bg-linear-to-br 
              from-red-500 
              to-blue-500
              rounded-b-4xl
              shadow-xl
              shadow-text-muted/30
              shrink-0
            "
          >
            <Image
              src={imgSrc}
              alt={heading}
              width={400}
              height={350}
              className="
                absolute 
                left-1/2 
                -bottom-20
                -translate-x-1/2
                object-cover
                w-[85%]
                h-full
                transition-all
                duration-500
                ease-out
                rotate-3
                scale-95
                group-hover:rotate-0
                group-hover:-bottom-10
                group-hover:scale-105
                group-hover:-translate-y-4
                drop-shadow-xl
              "
            />
          </div>
        )}

        {/* Textual Content */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          {/* Header Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-bold text-text-primary leading-tight line-clamp-1">
                {heading}
              </h3>

              {href && (
                <div className="shrink-0 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wide">
                    Live
                  </span>
                </div>
              )}
            </div>
            <p className="text-text-secondary text-sm line-clamp-2">
              {subheading}
            </p>
          </div>

          {/* Tech Stack */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-[10px] font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border/50"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 text-[10px] text-muted-foreground">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* --- Bottom Action Bar --- */}
          <div className="pt-4 mt-10 flex items-center justify-between border-t border-text-muted/30">
            {/* Left: Social Icons */}
            <div className="flex items-center gap-1">
              {/* GitHub Icon */}
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          p-2 rounded-full
          text-muted-foreground
          hover:bg-primary/10 hover:text-primary
          transition-all duration-300
        "
                  aria-label="View Source Code"
                >
                  <Github size={18} />
                </Link>
              )}

              {/* Visit Icon */}
              {href && (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          p-2 rounded-full
          text-muted-foreground
          hover:bg-blue-500/10 hover:text-blue-500
          transition-all duration-300
        "
                  aria-label={`Visit ${heading}`}
                >
                  <ArrowUpRight size={18} />
                </Link>
              )}
            </div>

            {/* Right: Details Button */}
            <Link
              href={`/projects/${slug}`}
              className="
      group/btn
      flex items-center gap-1.5 
      pl-3 pr-2 py-1.5 
      rounded-full
      text-xs font-semibold
      bg-secondary/50 text-secondary-foreground
      hover:bg-primary hover:text-primary-foreground
      transition-all duration-300
    "
            >
              <span>Details</span>
              <div className="bg-background/20 rounded-full p-0.5 group-hover/btn:bg-white/20 transition-colors">
                <ArrowRight
                  size={12}
                  className="group-hover/btn:-rotate-45 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
