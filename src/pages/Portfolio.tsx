import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SocialSection />
      </div>
      
      {/* Footer */}
      <footer className="py-4 md:py-8 px-4 md:px-6 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            © 2024 Kaveen S. Built with React, Framer Motion & modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;