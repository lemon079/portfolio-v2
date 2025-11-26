import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact - Bilal Tahir",
  description: "Get in touch with me. I'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <div className="relative w-full pt-20 pb-20">
      {/* Content */}
      <PageHeader
        title="Get in Touch"
        description="Have a question or want to work together? Feel free to reach out. I'm always interested in hearing about new projects and opportunities."
        align="center"
        maxWidth="xl"
      />
      <div className="relative z-10">
        <ContactForm />
      </div>
    </div>
  );
}
