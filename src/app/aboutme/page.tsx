
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About Me - Bilal Tahir",
  description: "Learn more about my journey, skills, and experience.",
};

export default function AboutMePage() {
  return (
    <div className="relative w-full pt-20 pb-20">
      {/* Content */}
      <div className="relative z-10 space-y-5 mb-10 max-w-2xl mx-auto">
        <h1 className="text-center text-5xl font-bold text-text-primary">
          About Me
        </h1>
        <p className="text-text-secondary text-center text-sm">
          A glimpse into my journey as a developer.
        </p>
        <Separator className="border-text-muted/20 border" />

        <div className="prose prose-invert mx-auto mt-10 text-gray-300">
          <p>
            I’m Bilal Tahir, a 21-year-old BSCS student currently in my 6th semester, dedicated to building a strong career in full-stack development and modern software engineering. Alongside my university studies, I’ve been consistently self-learning and working on real projects to strengthen my technical abilities.
          </p>
          <p>
            Outside of development, I enjoy calisthenics and reading self-improvement books, both of which help me maintain discipline, clarity, and balance in my daily life.
          </p>
          <p>
            I approach my career with independence and accountability, taking initiative in my learning and consistently exploring new technologies that can elevate my skillset and work quality.
          </p>
          <p className="italic text-center mt-8 text-text-muted">
            More updates soon...
          </p>
        </div>
      </div>
    </div>
  );
}
