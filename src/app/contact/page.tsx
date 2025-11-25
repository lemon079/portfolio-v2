import ContactForm from "@/components/ContactForm";

import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contact - Bilal Tahir",
  description: "Get in touch with me. I'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <div className="relative w-full pt-20 pb-20">
      {/* Content */}
      <div className="relative z-10 space-y-5 mb-10 max-w-xl mx-auto">
        <h1 className="text-center text-5xl font-bold text-text-primary">
          Get in Touch
        </h1>
        <p className="text-text-secondary text-center text-sm">
          Have a question or want to work together? Feel free to reach out.
          I&apos;m always interested in hearing about new projects and
          opportunities.
        </p>
        <Separator className="border-text-muted/20 border" />
      </div>

      {/* Beams Background - Between heading and form */}


      <div className="relative z-10">
        <ContactForm />
      </div>
    </div>
  );
}
