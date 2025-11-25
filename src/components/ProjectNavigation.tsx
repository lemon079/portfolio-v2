import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define a minimal type for what the nav needs
interface ProjectNavData {
  slug: string;
  heading: string;
}

interface ProjectNavigationProps {
  prevProject: ProjectNavData;
  nextProject: ProjectNavData;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
    <div className="pt-8 border-t border-text-muted/30 flex justify-between items-center gap-4">
      
      {/* Previous Project Button */}
      <Link 
        href={`/projects/${prevProject.slug}`}
        className="group text-left"
        aria-label={`Previous project: ${prevProject.heading}`}
      >
        <div className="text-sm text-muted-foreground mb-1">Previous Project</div>
        <div className="flex items-center gap-3 text-lg md:text-2xl font-bold text-text-secondary text-foreground group-hover:text-primary transition-colors">
          <ChevronLeft 
            size={28} 
            className="group-hover:-translate-x-2 transition-transform duration-300" 
          />
          {/* Hide full title on very small screens to prevent layout break */}
          <span className="hidden md:inline line-clamp-1">{prevProject.heading}</span>
          <span className="md:hidden">Prev</span> 
        </div>
      </Link>

      {/* Next Project Button */}
      <Link 
        href={`/projects/${nextProject.slug}`}
        className="group text-right"
        aria-label={`Next project: ${nextProject.heading}`}
      >
        <div className="text-sm text-muted-foreground mb-1">Next Project</div>
        <div className="flex items-center gap-3 text-lg md:text-2xl font-bold text-text-secondary text-foreground group-hover:text-primary transition-colors">
          <span className="hidden md:inline line-clamp-1">{nextProject.heading}</span>
          <span className="md:hidden">Next</span>
          <ChevronRight 
            size={28} 
            className="group-hover:translate-x-2 transition-transform duration-300" 
          />
        </div>
      </Link>
      
    </div>
  );
}