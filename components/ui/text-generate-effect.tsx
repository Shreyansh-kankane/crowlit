"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 15);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, words]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
        {!isComplete && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block ml-1 h-4 w-1 bg-white"
          />
        )}
      </motion.span>
    </div>
  );
};
