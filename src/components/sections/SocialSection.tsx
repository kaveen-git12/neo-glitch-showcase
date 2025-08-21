import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { FloatingIcon } from "@/components/FloatingIcon";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube,
  Code2,
  Trophy,
  Brain
} from "lucide-react";

export const SocialSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kaveen-git12",
      color: "text-foreground",
      description: "Check out my repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kaveen-s-1aa14637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-neon-blue",
      description: "Professional network"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/10BGAMING?t=6jXErfiUPX-3OdogP3MxEg&s=09",
      color: "text-neon-teal",
      description: "Latest updates & thoughts"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "text-neon-pink",
      description: "Behind the scenes"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "text-destructive",
      description: "Coding tutorials"
    },
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com",
      color: "text-neon-blue",
      description: "Algorithm practice",
      stats: "500+ problems solved"
    },
    {
      name: "HackerRank",
      icon: Trophy,
      url: "https://hackerrank.com",
      color: "text-neon-teal",
      description: "Competitive programming",
      stats: "5-star rating"
    },
    {
      name: "Codeforces",
      icon: Brain,
      url: "https://codeforces.com",
      color: "text-neon-purple",
      description: "Contest participation",
      stats: "Expert level"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="social" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 relative w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Connect With Me"
            className="text-4xl md:text-6xl font-bold text-gradient mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow my journey and connect on various platforms
          </p>
        </motion.div>

        {/* Social Media Links */}
        <div className="mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center"
          >
            Social Media
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group"
              >
                <div className="card-neon p-4 md:p-6 text-center h-full hover:scale-105 transition-transform duration-300">
                  <FloatingIcon className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-card/50 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                      <social.icon className={`w-6 h-6 md:w-8 md:h-8 ${social.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </FloatingIcon>
                  <h4 className="text-sm md:text-base font-semibold text-foreground group-hover:text-gradient transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Coding Profiles */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center"
          >
            Coding Profiles
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group"
              >
                <div className="card-glow p-6 md:p-8 text-center h-full hover:scale-105 transition-transform duration-300">
                  <FloatingIcon className="mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <profile.icon className={`w-8 h-8 md:w-10 md:h-10 ${profile.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </FloatingIcon>
                  <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-gradient transition-colors mb-2">
                    {profile.name}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-3">
                    {profile.description}
                  </p>
                  <div className="inline-block px-3 md:px-4 py-1 md:py-2 bg-accent/20 text-accent rounded-full text-xs md:text-sm font-medium">
                    {profile.stats}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};