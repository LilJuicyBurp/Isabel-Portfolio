"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center space-x-8 px-40 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Welcome to my portfolio !
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
          <span>
            Hi! I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Isabel Nguyen.{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[700px]"
        >
          I&apos;m a junior studying computer science and business at University of California, Irvine.
          I'm passionate about using technology to make a positive impact and am actively involved in organizations like Girls Who Code and Rewriting the Code.
          I have experience with programming languages like Python, Java, and C++, and have a keen interest in working on projects involving machine learning and web development.
          Feel free to check out my personal projects and skills below!
        </motion.p>
      
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="p-4 border-4 border-gray-300">
          <Image
            src="/bellpfp.jpg"
            alt="work icons"
            height={400}
            width={400}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
