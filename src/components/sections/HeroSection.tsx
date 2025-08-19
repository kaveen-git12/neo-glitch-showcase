import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText, TypingText } from "@/components/AnimatedText";
import { FloatingIcon } from "@/components/FloatingIcon";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ChevronDown, Code, Rocket, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Frontend Specialist",
    "Backend Engineer"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <AnimatedBackground />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon className="absolute top-20 left-20">
          <Code className="w-8 h-8 text-neon-blue" />
        </FloatingIcon>
        <FloatingIcon className="absolute top-32 right-32">
          <Rocket className="w-8 h-8 text-neon-purple" />
        </FloatingIcon>
        <FloatingIcon className="absolute bottom-40 left-40">
          <Zap className="w-8 h-8 text-neon-teal" />
        </FloatingIcon>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <AnimatedText
              text="Hello, I'm"
              className="text-2xl md:text-4xl font-light text-foreground"
            />
            <AnimatedText
              text="Alex Developer"
              className="text-4xl md:text-8xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              delay={0.3}
            />
            <div className="text-2xl md:text-4xl font-medium text-foreground">
              <TypingText texts={roles} speed={100} />
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technology and creative design. 
            Specializing in React, Node.js, and modern web technologies to bring ideas to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};