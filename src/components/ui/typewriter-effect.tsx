"use client";

import { motion } from "framer-motion";

interface TypewriterEffectProps {
  text: string;
  className?: string;
}

export function TypewriterEffect({
  text,
  className = "",
}: TypewriterEffectProps) {
  const calculateAnimationDelay = (index: number) => {
    return 2 + index * 0.03;
  };
  const initialDuration = 0.8;

  return (
    <div className="relative">
      <motion.span
        className="inline-block w-0.5 h-5 bg-black dark:bg-white ml-0.5 absolute"
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 0],
          transition: {
            duration: initialDuration,
            repeat: calculateAnimationDelay(1) - 0.1,
            repeatType: "reverse",
          },
        }}
      />
      <motion.p className={`relative ${className}`}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: calculateAnimationDelay(index),
              ease: "easeIn",
            }}
          >
            {char}
            {index === text.length - 1 && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-black dark:bg-white ml-0.5 absolute"
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
