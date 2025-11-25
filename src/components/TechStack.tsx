import TechBadge from "./TechBadge";
import SectionContent from "./SectionContent";

interface TechStackProps {
  title: string;
}

const TechStack = ({ title }: TechStackProps) => {

  const technologies = [
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "Sass", icon: "/sass.svg" },
    { name: "Express", icon: "/express.svg" },
    { name: "postgresql", icon: "/postgresql.svg" },
    { name: "MongoDB", icon: "/mongo.svg" },
    { name: "Prisma", icon: "/prisma.svg" },
    { name: "Git", icon: "/git.svg" },
  ];

  return (
    <SectionContent title={title}>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </SectionContent>
  );
};

export default TechStack;
