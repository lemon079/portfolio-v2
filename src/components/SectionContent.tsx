interface SectionContentProps {
  title: string;
  children: React.ReactNode;
}

const SectionContent = ({ title, children }: SectionContentProps) => {
  return (
    <div className="mt-20 space-y-4">
      <h2 className="font-bold text-4xl text-text-primary">{title}</h2>
      <div className="text-text-muted">
        {children}
      </div>
    </div>
  );
};

export default SectionContent;
