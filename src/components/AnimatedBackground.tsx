import { motion } from "framer-motion";
import { Github, Youtube, Twitter, Instagram, MessageCircle } from "lucide-react";

export const AnimatedBackground = () => {
  const socialIcons = [
    { Icon: Github, color: "text-foreground" },
    { Icon: Youtube, color: "text-destructive" },
    { Icon: Twitter, color: "text-neon-teal" },
    { Icon: Instagram, color: "text-neon-pink" },
    { Icon: MessageCircle, color: "text-neon-blue" }, // WhatsApp
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Floating orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Moving particles across entire page */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles with different patterns */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute w-2 h-2 bg-secondary/25 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 300 - 150, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear",
          }}
        />
      ))}

      {/* Spinning social media icons */}
      {socialIcons.map((social, i) => (
        <motion.div
          key={`social-${i}`}
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            rotate: 360,
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.3,
            rotate: 180,
            transition: { duration: 0.3 }
          }}
        >
          <div className="w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 hover:border-primary/50 transition-all duration-300">
            <social.Icon className={`w-6 h-6 ${social.color}`} />
          </div>
        </motion.div>
      ))}

      {/* Additional spinning icons in different positions */}
      {socialIcons.map((social, i) => (
        <motion.div
          key={`social-alt-${i}`}
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            right: `${10 + i * 15}%`,
            bottom: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            rotate: -360,
            x: [0, -40, 40, 0],
            y: [0, 25, -25, 0],
          }}
          transition={{
            rotate: {
              duration: 25 + i * 4,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 14 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.4,
            rotate: -180,
            transition: { duration: 0.3 }
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-accent/30 hover:border-accent/70 transition-all duration-300">
            <social.Icon className={`w-5 h-5 ${social.color}`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};