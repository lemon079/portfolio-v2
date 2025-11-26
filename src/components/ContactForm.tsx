"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You can replace this with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        // You can add a success toast notification here
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Group */}
        <div className="grid grid-cols-2 gap-4">
          {/* Name Input */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-text-primary text-sm">
              Name *
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="outline-0 focus:outline-2 border-0 outline-text-muted transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-primary text-sm">
              Email *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="outline-0 focus:outline-2 border-0 outline-text-muted transition-color"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-text-primary text-sm">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            rows={8}
            className="outline-0 focus:outline-2 border-0 outline-text-muted transition-all"
          />
        </div>

        {/* Send Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 px-6 py-2 hover:bg-black border border-text-muted"
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
