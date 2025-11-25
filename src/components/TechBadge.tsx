import Image from "next/image";

interface TechBadgeProps {
  name: string;
  icon: string;
}

const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <div className="p-1.5 flex gap-x-2 text-sm font-bold rounded-lg text-text-secondary border-2 bg-gray-700 border-dotted border-white/30">
      <Image src={icon} alt={name} width={20} height={20} />
      {name}
    </div>
  );
};

export default TechBadge;
