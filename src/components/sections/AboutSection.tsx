import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { FloatingIcon } from "@/components/FloatingIcon";
import { Download, User, Coffee, Award } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Coffee, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: User, label: "Happy Clients", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-6xl font-bold text-gradient mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card-neon p-8 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <FloatingIcon>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                </FloatingIcon>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Alex Developer</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate developer with 5+ years of experience creating innovative web applications. 
                I specialize in React, Node.js, and modern frameworks to deliver exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>

              <Button 
                variant="neon" 
                className="group"
                onClick={() => {
                  // Create a temporary link to download resume
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // You would put your actual resume here
                  link.download = 'Alex_Developer_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="card-glow p-6"
              >
                <div className="flex items-center space-x-4">
                  <FloatingIcon>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                  </FloatingIcon>
                  <div>
                    <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};