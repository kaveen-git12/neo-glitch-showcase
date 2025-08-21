import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { FloatingIcon } from "@/components/FloatingIcon";
import { ExternalLink, Github, Eye } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media managers with data visualization and automated reporting.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 relative w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Featured Projects"
            className="text-4xl md:text-6xl font-bold text-gradient mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest work in web development, from concept to deployment
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="card-neon h-full overflow-hidden">
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FloatingIcon>
                      <Eye className="w-12 h-12 text-primary" />
                    </FloatingIcon>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <Button variant="ghost-neon" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="ghost-neon" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-3 md:pt-4">
                    <Button variant="neon" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="hero" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button variant="neon" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};