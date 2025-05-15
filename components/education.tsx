"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import MITLogo from "@/public/MIT-logo.png";
import bnnLogo from "@/public/bnn-college-logo.png";
import doaLogo from "@/public/doa-school-logo.jpg";
import Image from "next/image";


export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex flex-col gap-8">
        {/* MIT Academy of Engineering */}
        <div className="flex gap-6 border border-black/5 rounded-lg p-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            <Image src={MITLogo} alt="MIT AOE" width="150" />
          </div>
          <div>
            <p className="text-lg font-medium">B.Tech - Computer Engineering</p>
            <p>MIT Academy of Engineering, Pune</p>
            <p className="mt-1">2022 - 2026</p>
            <p className="my-1">CGPA: 8.36/10</p>
            <ul className="list-disc pl-6">
              <li>Specialization in Cloud Computing & AI/ML</li>
              <li>Red Hat Certified System Administrator (RHCSA)</li>
            </ul>
          </div>
        </div>

        {/* 12th Grade */}
        <div className="flex gap-6 border border-black/5 rounded-lg p-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            <Image 
              src={bnnLogo} 
              alt="BNN College" 
              width="150" 
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg font-medium">Higher Secondary (12th)</p>
            <p>B.N.N. College, Bhiwandi</p>
            <p className="mt-1">2022</p>
            <p className="my-1">Percentage: 71%</p>
            <ul className="list-disc pl-6">
              <li>MSBSHSE Board</li>
              <li>Science Stream</li>
            </ul>
          </div>
        </div>

        {/* 10th Grade */}
        <div className="flex gap-6 border border-black/5 rounded-lg p-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            <Image 
              src={doaLogo} 
              alt="Dr. Omprakash Agarwal English High School" 
              width="150" 
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg font-medium">Secondary School (10th)</p>
            <p>Dr. Omprakash Agarwal English High School, Bhiwandi</p>
            <p className="mt-1">2020</p>
            <p className="my-1">Percentage: 85.20%</p>
            <ul className="list-disc pl-6">
              <li>MSBSHSE Board</li>
              <li>State Topper in Mathematics</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
