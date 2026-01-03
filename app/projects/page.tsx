import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects built with Next.js, React, and modern technologies",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects - Alex Rivera",
    description: "Explore my portfolio of web development projects",
    url: "/projects",
  },
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A fully-featured online store with product catalog, shopping cart, and checkout integration. Built with Next.js and Stripe for payments.",
    tech: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    image: "/modern-ecommerce-dark.png",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
    tech: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    image: "/task-management-dashboard-futuristic.jpg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Chat Application",
    description:
      "Conversational AI interface with real-time streaming responses, conversation history, and modern chat UI.",
    tech: ["Next.js", "Vercel AI SDK", "OpenAI", "Tailwind CSS"],
    image: "/ai-chat-interface-dark-mode.jpg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with 7-day forecasts, location search, and interactive weather maps.",
    tech: ["React", "Next.js", "Weather API", "Charts"],
    image: "/weather-app-modern-interface.jpg",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals to showcase their work with customizable templates.",
    tech: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS"],
    image: "/portfolio-cms-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Fitness Tracking Platform",
    description:
      "Comprehensive fitness tracking with workout logging, progress charts, and personalized recommendations.",
    tech: ["Next.js", "PostgreSQL", "Charts", "Tailwind CSS"],
    image: "/fitness-app-dashboard-dark.jpg",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm">
            <FolderGit2 className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Featured <span className="text-primary glow-cyan">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A collection of projects showcasing my expertise in modern web
            development. Each project demonstrates different aspects of frontend
            development, from e-commerce to AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-effect border-border/40 hover:border-primary/40 transition-all duration-300 overflow-hidden group relative card-glow hover:card-glow"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-effect border-primary/30 hover:border-primary/50 hover:bg-primary/10 bg-transparent text-foreground hover:text-primary"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-x-0 -top-40 h-40 bg-primary/20 blur-3xl" />
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-20">
          <Card className="glass-effect border-primary/20 card-glow p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Have a project in{" "}
                <span className="text-primary glow-cyan">mind?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Let's work together to bring your ideas to life.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="/contact">Start a Conversation</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-60 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-60 right-10 w-56 h-56 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
