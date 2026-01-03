import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Mail, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alex Rivera - Available for freelance projects and collaboration opportunities",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Alex Rivera",
    description: "Get in touch for project inquiries and collaborations",
    url: "/contact",
  },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    username: "@alexrivera",
    color: "text-foreground hover:text-primary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    username: "Alex Rivera",
    color: "text-foreground hover:text-primary",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    username: "@alexrivera",
    color: "text-foreground hover:text-primary",
  },
];

const contactInfo = [
  {
    title: "Email",
    value: "alex@example.com",
    icon: Mail,
  },
  {
    title: "Response Time",
    value: "Within 24 hours",
    icon: MessageSquare,
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Let's Build Something{" "}
            <span className="text-primary glow-cyan">Amazing</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Have a project in mind or want to discuss potential collaboration?
            I'd love to hear from you. Fill out the form below or reach out
            through any of my social channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-primary/20 card-glow p-8">
              <ContactForm />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass-effect border-border/40 hover:border-primary/40 transition-all p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {info.title}
                      </p>
                      <p className="font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="glass-effect border-border/40 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg glass-effect border border-border/40 hover:border-primary/40 transition-all group"
                  >
                    <link.icon
                      className={`h-5 w-5 transition-colors ${link.color}`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {link.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Badge */}
            <Card className="glass-effect border-primary/20 card-glow p-6 text-center space-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 m-0" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-primary">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for Work
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
