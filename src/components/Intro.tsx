"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[52rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", delay: 0.2 }}
          >
            <Image
              src={"/profile_image.jpeg"}
              width={192}
              height={192}
              quality={95}
              priority={true}
              alt="Himanshu Pandey Profile Image"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.7,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* <motion.p
        className="mb-10 mt-t px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> Hello I'm Himanshu Pandey</span>, I'm a{" "}
        <span className="font-bold">Full Stack Developer</span> with{" "}
        <span className="font-bold">2.3 Years</span> of experience. I enjoy
        building <span className="italic"> sites & apps</span>. My focus is{" "}
        <span className="underline"> React (Next.js)</span>
      </motion.p> */}
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Himanshu Pandey</span>, a{" "}
        <span className="font-bold">Full Stack Developer</span> with{" "}
        <span className="font-bold">2.3 years</span> of experience building{" "}
        <span className="italic">web and mobile applications</span>. I
        specialize in{" "}
        <span className="underline">React, Next.js, and React Native</span>,
        creating{" "}
        <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          seamless digital experiences across platforms
        </span>
        .
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-5 px-4 text-lg font-medium items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {" "}
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
          download={true}
          href="/Himanshu_Pandey.pdf"
        >
          Download CV{" "}
          <BsDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15]   active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950"
          href="https://www.linkedin.com/in/himanshudkp"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/himanshudkp"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
