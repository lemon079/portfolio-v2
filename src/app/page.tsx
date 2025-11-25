import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import SectionContent from "@/components/SectionContent";
import ProjectCard from "@/components/ProjectCard";
import projects from "../../projects.js";

const page = () => {
  return (
    <div className="pt-20 space-y-20">
      <HeroSection
        imageUrl="/pfp-animated.svg"
        name="Bilal Tahir"
        title="Full stack developer"
        description="I apply rigorous critical thinking to design scalable, reliable systems, and I continuously upskill to stay relevant in the rapidly evolving AI landscape."
      />

      <TechStack title="Technologies and Tools" />

      <SectionContent title="Work Experience">
        i dont have any job work experience, but i have been developing stuff
        since the start of my university (2022) i&apos;d say. Hoping to fill
        this section alot real soon.
      </SectionContent>

      <SectionContent title="Personal Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={`project-${idx + 1}`} {...project} />
          ))}
        </div>
      </SectionContent>
    </div>
  );
};

export default page;
