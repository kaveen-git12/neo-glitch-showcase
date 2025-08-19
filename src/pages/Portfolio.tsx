import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialSection } from "@/components/sections/SocialSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SocialSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Developer. Built with React, Framer Motion & modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;