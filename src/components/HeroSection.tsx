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
    <div>
      <div className="flex items-center gap-8">
        <Image
          src={imageUrl}
          alt="profile-picture"
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="space-y-4">
          <h1 className="text-2xl text-text-primary mb-2">
            {name} —{" "}
            <span className="font-bold text-3xl text-text-secondary">
              {title}
            </span>
          </h1>
          <p className="text-text-muted max-w-md">{description} </p>
          <SocialLinks
            githubUrl="https://github.com/lemon079"
            linkedinUrl="https://www.linkedin.com/in/bilal-tahir-a743a12ab/"
            email="bilaltahir079@gmail.com"
          />
        </div>
        <div className="relative ml-auto">
          <Image
            unoptimized
            src={"/cat.gif"}
            alt="profile-picture"
            width={125}
            height={125}
            className="rounded-full absolute -top-16"
          />

          <Link
            href={process.env.RESUME_LINK as string}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-text-muted p-2 rounded-xl border-dotted font-bold"
          >
            <ShinyText text="Resume" speed={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
