"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="flex justify-center items-center my-16 sm:my-20">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.125,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Main divider line */}
        <motion.div
          className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 h-20 w-[2px] rounded-full shadow-sm"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg border-2 border-white" />
        </motion.div>

        {/* Subtle glow effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400/20 rounded-full blur-md"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
          }}
        />

        {/* Side ornaments */}
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-400 rounded-full"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-400 rounded-full"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
