import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { GridBackground } from "@/components/grid-background";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Alex Rivera's portfolio - Frontend developer crafting exceptional web experiences",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Rivera - Frontend Developer",
    description:
      "Crafting exceptional web experiences with cutting-edge technologies",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      <GridBackground />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
              Crafting Digital
              <br />
              <span className="glow-cyan text-primary">Experiences</span> that
              Matter
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Frontend developer specializing in building exceptional web
              applications with Next.js, React, and modern technologies.
              Transforming ideas into seamless, high-performance digital
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-effect border-primary/30 hover:border-primary/50 hover:bg-primary/10 text-foreground bg-transparent w-full sm:w-auto"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary glow-cyan">
                  5+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Experience
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-secondary glow-purple">
                  50+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary glow-cyan">
                  20+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Clients
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative Neon Rings */}
              <div className="absolute -inset-5 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div
                className="absolute -inset-2.5 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"
                style={{ animationDirection: "reverse" }}
              />

              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden glass-effect border-2 border-primary/30 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500 card-glow">
                <Image
                  src="/professional-portrait-of-a-frontend-developer-in-a.jpg"
                  alt="Alex Rivera - Frontend Developer"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />

                {/* Cybernetic HUD elements overlay */}
                <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-primary" />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-effect px-4 py-1 rounded border border-primary/30 text-[10px] tracking-[0.2em] uppercase text-primary font-mono">
                  Neural Sync: 98%
                </div>
              </div>

              {/* Decorative floating bits */}
              <div className="absolute -top-10 -right-5 w-16 h-16 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-5 -left-10 w-24 h-24 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-40 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}
