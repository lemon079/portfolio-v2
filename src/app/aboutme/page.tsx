import AboutSection from "@/components/AboutSection";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Me - Bilal Tahir",
  description: "Learn more about my journey, skills, and experience.",
};

const sections = [
  {
    title: "Academic Goals",
    description: "CGPA: 3.08. Graduating in 2026 with a BSCS degree. I prioritize skill development over grades."
  },
  {
    title: "Who I Am",
    description: "21-year-old CS student, 7th semester. Focused on becoming a strong full-stack engineer through real projects and modern frameworks."
  },
  {
    title: "Technical Direction",
    description: "Full-stack development, modern web engineering, and AI integration. Building with MERN, PERN, and experimenting with AI agents."
  },
  {
    title: "Work Ethic & Mindset",
    description: "Self-driven and proactive. I figure things out independently and stay accountable. Growth over completion."
  },
  {
    title: "Beyond Coding",
    description: "Calisthenics and self-improvement books keep me disciplined and focused."
  }
];

export default function AboutMePage() {
  return (
    <div className="relative w-full pt-20 pb-20">
      {/* Content */}
      <PageHeader
        title="About Me"
        description="A glimpse into my journey as a developer."
        align="left"
        image={{
          src: "/excited-cat.gif",
          alt: "profile-picture",
          width: 100,
          height: 100,
        }}
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-invert mx-auto mt-10 space-y-8">
          {sections.map((section) => (
            <AboutSection
              key={section.title}
              title={section.title}
              description={section.description}
            />
          ))}

          <p className="italic text-center mt-8 text-text-muted">
            More updates soon...
          </p>
        </div>
      </div>
    </div>
  );
}
