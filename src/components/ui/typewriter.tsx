"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 2000,
  className,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText.split("").map((char, index) => (
        <motion.span
          key={`${currentWordIndex}-${index}`}
          initial={{ opacity: 0, filter: "blur(2px)", y: 2 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0.1, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block w-[3px] h-[1.1em] bg-current ml-1 align-middle rounded-full"
      />
    </span>
  );
}

