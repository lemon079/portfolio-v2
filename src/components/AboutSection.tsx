interface AboutSectionProps {
    title: string;
    description: string;
}

export default function AboutSection({ title, description }: AboutSectionProps) {
    return (
        <section>
            <h2 className="text-text-primary">{title}</h2>
            <p className="text-text-muted">{description}</p>
        </section>
    );
}
