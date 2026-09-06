"use client"

import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TextAnimate } from "../ui/TextAnimate";

type Project = {
  projectName: string
  techStack: string[]
}

const projects : Project[] = [
  {
    projectName: "E-commerce app",
    techStack: [
      "Next.js",
      "Zustand",
      "NeonDB",
      "DrizzleORM",
      "NextAuth"
    ]
  },
  {
    projectName: "Architect Portfolio",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Motion"
    ]
  }
]

export default function ProjectsPage ({ scroll } : { scroll : MotionValue}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const width = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "100%"])

  return (
    <div ref={containerRef} className="w-full h-fit flex flex-col justify-center items-center">
      <div className="w-full h-fit flex flex-col justify-center items-start gap-4 p-8 sm:p-32">
        <motion.div 
          className="h-px bg-dark "
          style={{ width }}
        />
        <TextAnimate 
          className="text-xs sm:text-base font-[raleway] primary-light pb-12"
          animation="slideUp"
          by="character"
          delay={0.2}
        >
          Selected Projects //
        </TextAnimate>
        <div className="w-full h-fit flex flex-col justify-center items-end gap-16 sm:gap-24">
          {projects.map((project, index) => (
            <div key={index} className="w-fit h-fit flex flex-col justify-center items-end gap-4 sm:gap-8">
              <TextAnimate
                className="text-2xl sm:text-5xl font-[raleway] font-semibold primary-light"
                animation="slideUp"
                by="character"
                delay={0.6}
                >
                {project.projectName}
              </TextAnimate>
              <div className="w-fit h-fit flex justify-center items-center gap-4 sm:gap-8">
                {project.techStack.map((tech, index) => (
                  <TextAnimate
                    key={index}
                    className="text-xs sm:text-base font-[raleway] font-semibold secondary-light"
                    animation="slideUp"
                    by="word"
                    delay={0.8}
                    >
                    {tech}
                  </TextAnimate>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}