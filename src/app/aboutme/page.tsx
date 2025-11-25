
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
            Hello! I'm Bilal Tahir, a passionate Full Stack Developer with a knack for building beautiful, high-performance web applications.
          </p>
          <p>
            My journey in web development started with a curiosity for how things work on the internet, which quickly turned into a career obsession. I specialize in the React ecosystem, particularly Next.js, and I love exploring new technologies to solve real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new design trends, contributing to open source, or learning about the latest advancements in AI and tech.
          </p>
          <p className="italic text-center mt-8 text-text-muted">
            More updates soon...
          </p>
        </div>
      </div>
    </div>
  );
}
