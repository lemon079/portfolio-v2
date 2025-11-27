import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Zap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import projects from "../../../../projects";
import { InsightCard } from "@/components/InsightCard";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { GithubButton } from "@/components/GithubButton";
import { VisitButton } from "@/components/VisitButton";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// =====================================================
// 1. DYNAMIC METADATA (CLEANED)
// =====================================================
export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.heading} | Portfolio`,
    description: project.subheading,
    openGraph: {
      title: project.heading,
      description: project.subheading,
      images: [
        {
          url: project.imgSrc,
          width: 1200,
          height: 630,
          alt: project.heading
        }
      ]
    }
  };
}

// =====================================================
// 2. STATIC PARAMS
// =====================================================
export function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug
  }));
}

// =====================================================
// 3. PAGE COMPONENT
// =====================================================
export default async function ProjectDetailsPage({
  params
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(p => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];

  const next = projects[(projectIndex + 1) % projects.length];
  const prev =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        {/* ================= HERO ================= */}
        <section className="space-y-8">
          {/* MAIN IMAGE */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-text-muted/20 shadow-2xl">
            <Image
              src={project.imgSrc}
              alt={project.heading}
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="100vw"
            />
          </div>

          {/* TITLE + ACTIONS */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                {project.heading}
              </h1>

              <p className="text-xl text-text-secondary font-medium">
                {project.subheading}
              </p>

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map(tech => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 bg-text-muted/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-3 shrink-0">
              {project.github && (
                <GithubButton href={project.github} label="Visit Code" />
              )}
              {project.href && (
                <VisitButton href={project.href} label="Visit Site" />
              )}
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="prose prose-lg dark:prose-invert">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Overview
          </h3>
          <p className="leading-relaxed whitespace-pre-line text-text-muted">
            {project.description}
          </p>
        </section>

        {/* ================= CHALLENGES & LEARNINGS ================= */}
        <section className="grid md:grid-cols-2 gap-8">
          <InsightCard
            title="Challenges"
            icon={Zap}
            items={project.challenges}
            variant="danger"
          />
          <InsightCard
            title="Key Learnings"
            icon={BookOpen}
            items={project.keyLearnings}
            variant="success"
          />
        </section>

        {/* ================= PAGINATION ================= */}
        <ProjectNavigation prevProject={prev} nextProject={next} />

      </div>
    </main>
  );
}
