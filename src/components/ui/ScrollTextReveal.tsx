"use client"

import { cn } from "@/lib/utils"
import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
} from "react"
import { AnimatePresence, easeInOut, motion, MotionValue, useScroll, useTransform } from "motion/react"

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
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string,
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 5])
  const backgroundColor = useTransform(scrollYProgress, [0.9, 1], ["#080807", "#121212"])
  
  const words = children.split(" ")

  return (
    <motion.div ref={sectionRef} style={{ backgroundColor }} className={cn("relative z-0 h-[300svh]", className)}>
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ amount: 0.7 }}
          className={"h-lvh sticky top-0 flex items-center bg-transparent px-4 py-20"}
        >
          <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <motion.div style={{ scale }} className="w-50 h-80 sm:w-100 sm:h-175 rounded-full bg-[#121212]" />
          </div>
          <span className={"flex flex-wrap justify-center p-5 text-[clamp(1.875rem,0.673rem+4.808vw,3.5rem)] leading-[1.2] font-bold primary-dark md:p-8 lg:p-85"}>
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
    </motion.div>
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
