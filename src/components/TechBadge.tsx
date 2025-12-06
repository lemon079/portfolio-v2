import Image from "next/image";

interface TechBadgeProps {
  name: string;
  icon: string;
}

const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <div className="p-1.5 flex gap-x-2 text-sm font-bold rounded-lg text-text-primary bg-text-muted/10 dark:bg-gray-700 border-2 border-dotted border-text-muted/30 dark:border-white/30">
      <Image src={icon} alt={name} width={20} height={20} style={{ aspectRatio: '1/1' }} loading="lazy" />
      {name}
    </div>
  );
};

export default TechBadge;
