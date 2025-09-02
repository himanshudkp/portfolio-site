"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export const About = () => {
  return (
    <motion.section
      //   ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      id="about"
    >
      {/* <h2 >About me</h2> */}
      <SectionHeading title="About Me" />

      <motion.div
        className="space-y-6 text-gray-700 dark:text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.p
          className="text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            Himanshu Pandey
          </span>
          , a frontend developer with{" "}
          <span className="font-semibold text-purple-600">
            2+ years of experience
          </span>{" "}
          building responsive and user-centric web and mobile applications. I
          specialize in{" "}
          <span className="font-semibold text-gray-800 underline decoration-blue-400 decoration-2">
            ReactJS, Next.js, React Native, and TypeScript
          </span>
          , with a strong focus on clean UI design, performance optimization,
          and scalable state management using{" "}
          <span className="font-medium text-indigo-600 italic">
            Redux Toolkit and TanStack Query
          </span>
          .
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          At{" "}
          <span className="font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">
            Heaptrace Technology
          </span>
          , I contributed to multiple production-grade projects, from
          recruitment platforms to energy monitoring apps and EV charging
          dashboards. My work spans{" "}
          <span className="font-medium text-green-700 underline decoration-green-400 decoration-2">
            responsive UI development, cross-platform mobile apps, REST API
            integrations, and real-time data visualizations
          </span>
          , ensuring seamless experiences across devices.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          I'm passionate about creating applications that not only look great
          but also deliver{" "}
          <span className="font-semibold text-yellow-700 bg-yellow-100 px-2 py-1 rounded">
            reliable, high-performing, and accessible
          </span>{" "}
          solutions. Beyond coding, I enjoy exploring emerging JavaScript
          frameworks, experimenting with UI libraries, and continuously learning
          to improve my craft. Currently, I'm looking for opportunities to
          contribute as a{" "}
          <span className="font-bold text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200">
            Frontend Developer
          </span>
          , where I can apply my expertise in modern frameworks to build
          impactful digital products.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
