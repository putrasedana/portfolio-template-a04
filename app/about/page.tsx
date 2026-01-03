import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { User, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Alex Rivera - Frontend developer with expertise in Next.js, React, and modern web technologies",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About - Alex Rivera",
    description:
      "Frontend developer with 5+ years of experience crafting exceptional web experiences",
    url: "/about",
  },
};

const skills = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
  tools: ["Git", "Figma", "VS Code", "Vercel", "GitHub"],
  concepts: [
    "Responsive Design",
    "Web Performance",
    "SEO",
    "Accessibility",
    "UI/UX",
  ],
};

const experience = [
  {
    year: "2023 - Present",
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    description:
      "Leading frontend development for enterprise web applications, mentoring junior developers, and architecting scalable solutions.",
  },
  {
    year: "2021 - 2023",
    title: "Frontend Developer",
    company: "Digital Innovations Inc",
    description:
      "Built responsive web applications using React and Next.js, collaborated with design teams to implement pixel-perfect UIs.",
  },
  {
    year: "2020 - 2021",
    title: "Junior Web Developer",
    company: "StartUp Studio",
    description:
      "Developed interactive websites and landing pages, gained experience with modern JavaScript frameworks and best practices.",
  },
];

const education = [
  {
    year: "2016 - 2020",
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    description:
      "Focused on web technologies, software engineering, and user interface design.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm">
            <User className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">About Me</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Building the <span className="text-primary glow-cyan">Future</span>{" "}
            of Web
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I'm a passionate frontend developer with over 5 years of experience
            creating modern, user-centric web applications. My journey in web
            development started with a curiosity about how websites work, and it
            has evolved into a career dedicated to crafting exceptional digital
            experiences that combine beautiful design with robust functionality.
          </p>
        </div>

        {/* Skills Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Skills & Expertise
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend Skills */}
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all card-glow p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Tools */}
            <Card className="glass-effect border-secondary/20 hover:border-secondary/40 transition-all card-glow-purple p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-secondary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Concepts */}
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all card-glow p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
            </div>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <Card
                key={index}
                className="glass-effect border-border/40 hover:border-primary/40 transition-all p-6 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-3 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
            </div>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="glass-effect border-border/40 hover:border-secondary/40 transition-all p-6 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-3 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="text-secondary font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
