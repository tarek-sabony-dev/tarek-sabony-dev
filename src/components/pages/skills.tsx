"use client"

import { MotionValue } from 'motion';
import { motion, useScroll, useTransform } from "motion/react";
import HorizontalScrollText from '../ui/HorizontalScrollText';
import { useRef } from 'react';
import SplittingText from '../ui/SplittingText';

export type Skill = {
  name: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "FRONT-END",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Motion" },
      { name: "Zustand & Redux" },
    ],
  },
  {
    title: "BACK-END",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Drizzle & Prisma" },
    ],
  }
];

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Animations for the two paragraphs
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.1], [-30, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.1], [30, 0])
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10">
      <div ref={containerRef} className="relative h-[300vh] w-full bg-[#121212]" >
        <div className="sticky top-0 flex h-screen flex-col items-start justify-center gap-24 sm:gap-8 overflow-hidden">
          <div className="w-full h-full flex flex-col justify-between items-center py-32 absolute -z-10">
            <motion.div
              style={{ opacity, y }}
              className="w-full h-fit flex justify-start px-8 sm:px-32 py16 sm:py32"
            >
              <p className="w-60 sm:w-100 h-fit secondary-dark text-[12px] sm:text-base font-[raleway]">
                Every choice of colour and font, every animation, every pixel, they're
                not just aesthetic decisions. They're psychological handshakes.
              </p>
            </motion.div>
            <motion.div
              style={{ opacity, y: y1 }}
              className="w-full h-fit flex justify-end px-8 sm:px-32 py16 sm:py32"
            >
              <p className="w-60 sm:w-100 h-fit secondary-dark text-[12px] sm:text-base font-[raleway]">
                The gap between a click and a response is where trust goes to die or
                multiply. That millisecond-long void is the most fragile moment in any digital experience.
              </p>
            </motion.div>
          </div>
          <HorizontalScrollText scroll={ scrollYProgress } >
            the instruments of my orchestra
          </HorizontalScrollText>
        </div>
      </div>
      <SplittingText title={categories[0].title} list={categories[0].skills} />
      <SplittingText title={categories[1].title} list={categories[1].skills} />
    </div>
  )
}