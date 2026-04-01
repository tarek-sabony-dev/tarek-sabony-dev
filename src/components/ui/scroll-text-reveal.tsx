"use client"

import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
} from "react"
import { AnimatePresence, easeInOut, motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "../hooks/useMobile"

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      easeInOut,
      staggerChildren: 0.1, // Stagger each child by 0.1 seconds
      delayChildren: 0.1, // delay before starting children
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1, // Reverse order on exit
      when: "afterChildren", // Children exit first, then container
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  const words = children.split(" ")

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[200svh]", className)}>
      <AnimatePresence>
        <motion.div 
          variants={containerVariants}
          initial={"hidden"}
          whileInView={"visible"}
          exit={"exit"}
          viewport={{ amount: 0.7 }}
          className={"h-svh sticky top-0 flex items-center bg-transparent px-4 py-20"}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-50 h-80 sm:w-100 sm:h-175 rounded-full bg-[#121212]" />
          </div>
          <span className={"flex flex-wrap justify-center p-5 text-3xl font-bold primary-dark md:p-8 md:text-3xl lg:p-100 lg:text-6xl "}>
            {words.map((word, i) => {
              const start = i / words.length
              const end = start + 1 / words.length
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              )
            })}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const color = useTransform(progress, range, ["#080807", "#E8E8E3"])
  return (
    <motion.span variants={childVariants} className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30 z-10">
        {children}
      </span>
      <motion.span style={{ color: color }} >
        {children}
      </motion.span>
    </motion.span>
  )
}
