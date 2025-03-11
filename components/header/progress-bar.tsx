"use client";

import { useReadingProgress } from "@/hooks/userReadingProgress";
import { motion } from "framer-motion";
import React from "react";

const ProgressBar = () => {
  const completion = useReadingProgress();
  return (
    <motion.span
      style={{ transform: `translateX(${completion - 100}%)` }}
      className="absolute bottom-0 h-1 w-full bg-gray-400"
      animate={{ transform: `translateX(${completion - 100}%)` }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default ProgressBar;
