import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface TypingTextProps {
  texts: string[];
  className?: string;
  speed?: number;
}

export const TypingText = ({ texts, className = "", speed = 50 }: TypingTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => 
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed]);

  return (
    <span className={`${className} text-gradient`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};