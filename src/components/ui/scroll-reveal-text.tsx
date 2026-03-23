"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion, useInView } from "motion/react"

interface ScrollRevealTextProps {
  children: string
  startColor?: string
  endColor?: string
  className?: string
  height?: string
}

export default function ScrollRevealText({
  children,
  height = "300vh",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.1, 1])

  return (
    <div ref={containerRef} style={{ height }} className="relative">
      <motion.div ref={targetRef} style={{ opacity }} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ y: 0, scale: 0.9, opacity: 0 }}
          whileInView={{ y: -20, scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 1 }}
          className="w-fit text-5xl sm:text-9xl primary-dark font-medium font-[lora] py-36" 
        >
          {`${children}`}
        </motion.div>
      </motion.div>
    </div>
  )
}
