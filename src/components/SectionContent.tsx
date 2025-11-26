interface SectionContentProps {
  title: string;
  children: React.ReactNode;
}

const SectionContent = ({ title, children }: SectionContentProps) => {
  return (
    <div className="mt-20 space-y-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">{title}</h2>
      <div className="text-text-muted">
        {children}
      </div>
    </div>
  );
};

export default SectionContent;
