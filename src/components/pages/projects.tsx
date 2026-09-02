"use client"

import { MotionValue, motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TextAnimate } from "../ui/TextAnimate";

export default function ProjectsPage ({ scroll } : { scroll : MotionValue}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const width = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "100%"])


  return (
    <div ref={containerRef} className="w-full h-fit flex flex-col justify-center items-center">
      <div className="w-full h-fit flex flex-col justify-center items-start gap-4 px-8 sm:px-32">
        <motion.div 
          className="h-px bg-dark "
          style={{ width }}
          >
        </motion.div>
        <TextAnimate 
          className="text-xs sm:text-base font-[raleway] primary-light"
          animation="slideUp"
          by="character"
          delay={0.2}
        >
          Selected Projects //
        </TextAnimate>
        <div className="w-full h-fit flex flex-col justify-center items-end">
          <TextAnimate
            className="text-2xl sm:text-5xl font-[raleway] font-semibold primary-light py-12"
            animation="slideUp"
            by="character"
            delay={0.6}
          >
            E-commerce app
          </TextAnimate>
          <TextAnimate
            className="text-2xl sm:text-5xl font-[raleway] font-semibold primary-light py-12"
            animation="slideUp"
            by="character"
            delay={0.8}

          >
            Fluffy Store
          </TextAnimate>
          <TextAnimate
            className="text-2xl sm:text-5xl font-[raleway] font-semibold primary-light py-12"
            animation="slideUp"
            by="character"
            delay={1}

          >
            Architict Portfolio
          </TextAnimate>
        </div>
      </div>
    </div>
  )
}