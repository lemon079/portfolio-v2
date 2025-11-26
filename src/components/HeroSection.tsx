import Image from "next/image";
import Link from "next/link";
import ShinyText from "./ui/ShinyText";
import { SocialLinks } from "./SocialLinks";

interface HeroSectionProps {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
}

const HeroSection = ({
  imageUrl,
  name,
  title,
  description,
}: HeroSectionProps) => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center gap-8">
        <Image
          src={imageUrl}
          alt="profile-picture"
          width={128}
          height={128}
          className="rounded-full"
          loading="eager"
        />

        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl text-text-primary mb-2">
            {name} —{" "}
            <span className="font-bold text-2xl md:text-3xl text-text-secondary">
              {title}
            </span>
          </h1>
          <p className="text-sm md:text-base text-text-muted max-w-md">{description}</p>
          <SocialLinks
            githubUrl="https://github.com/lemon079"
            linkedinUrl="https://www.linkedin.com/in/bilal-tahir-a743a12ab/"
            email="bilaltahir079@gmail.com"
          />
        </div>

        <div className="relative ml-auto ">
          <Image
            unoptimized
            src={"/cat.gif"}
            alt="profile-picture"
            width={125}
            height={125}
            className="absolute -top-16"
          />

          <Link
            href={(process.env.RESUME_LINK as string) || "https://drive.google.com/file/d/1zI6jC8b5VVV_0l84DFfxniXc1wJfCT_E/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-text-muted p-2 rounded-xl border-dotted font-bold relative z-10"
          >
            <ShinyText text="Resume" speed={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-6">
        {/* Top Row: PFP on left, Cat + Resume on right */}
        <div className="flex items-center justify-between">
          <Image
            src={imageUrl}
            alt="profile-picture"
            width={100}
            height={100}
            className="rounded-full"
            loading="eager"
            style={{ transform: 'translateZ(0)' }}
          />

          <div className="relative flex flex-col self-end">
            <Image
              unoptimized
              src={"/cat.gif"}
              alt="cat-gif"
              width={80}
              height={80}
              className="absolute -top-14"
            />
            <Link
              href={(process.env.RESUME_LINK as string) || "https://drive.google.com/file/d/1zI6jC8b5VVV_0l84DFfxniXc1wJfCT_E/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-text-muted p-2 rounded-xl border-dotted font-bold"
            >
              <ShinyText text="Resume" speed={20} />
            </Link>
          </div>
        </div>

        {/* Bottom: Title, Description, Social Links */}
        <div className="space-y-4">
          <h1 className="text-xl text-text-primary mb-2">
            {name} —{" "}
            <span className="font-bold text-2xl text-text-secondary">
              {title}
            </span>
          </h1>
          <p className="text-sm text-text-muted">{description}</p>
          <SocialLinks
            githubUrl="https://github.com/lemon079"
            linkedinUrl="https://www.linkedin.com/in/bilal-tahir-a743a12ab/"
            email="bilaltahir079@gmail.com"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
