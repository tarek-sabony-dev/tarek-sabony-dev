"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { useIsMobile } from "../hooks/useMobile"
import { Skill } from "../pages/skills"

interface SplittingTextProps {
  title: string
  list: Skill[]
}

export default function SplittingText({ title, list }: SplittingTextProps) {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const splittedText = title.split(/(\-)/)

  const gap = useTransform(scrollYProgress, [0, 0.3], ["0px", isMobile ? "100px" : "400px"])
  const listItemsGap = useTransform(scrollYProgress, [0, 0.9], ["120px", "8px"])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.1])
  const dashOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.9], ["1000px", "0px"])

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-light">
      <div className="h-screen sticky top-0 flex justify-center items-center overflow-hidden">
        <motion.div
          style={{ gap }}
          className="w-full relative flex items-center justify-center font-[raleway]"
        >
          <motion.div style={{ opacity }} className="primary-light text-6xl sm:text-[175px] font-bold">
            {splittedText[0]}
          </motion.div>
          <motion.div style={{ opacity: dashOpacity }} className="primary-light text-6xl sm:text-[175px] font-bold">
            {splittedText[1]}
          </motion.div>
          <motion.div style={{ opacity }} className="primary-light text-6xl sm:text-[175px] font-bold">
            {splittedText[2]}
          </motion.div>
          <motion.ul
            style={{ y, gap: listItemsGap }}
            className="absolute w-fit h-fit flex flex-col justify-center items-center primary-light text-5xl"
          >
            {list.map((item, index) => (
              <motion.li
                className="flex justify-center items-center gap-4 primary-light text-4xl sm:text-6xl font-[raleway] font-semibold"
                key={index}
              >
                {item.name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  )
}