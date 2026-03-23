"use client"

import Orb from "../ui/Orb";
import { motion, MotionValue, useTransform } from 'motion/react'
import { TextAnimate } from "../ui/text-animate";
import { Triangle } from "lucide-react";
import { useIsMobile } from "../hooks/useMobile";

export default function HomePage ({ scroll } : { scroll: MotionValue }) {
  const isMobile = useIsMobile()
  const y = useTransform(scroll, [0, 1], [0, isMobile ? 400 : 1600]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="w-full h-svh relative overflow-hidden"
      style={{ y, willChange: "transform" }}>
      <Orb>
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
          <TextAnimate 
            className="w-fit text-5xl sm:text-9xl primary-light font-medium font-[lora]" 
            animation="blurInUp"
            by="character"
            duration={1}
            delay={2}
            once
          >
            Tarek Sabony
          </TextAnimate>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <Triangle size={isMobile ? 10 : 14} color="#6B645C" fill="#6B645C" />
          </motion.div>
          <div className="w-fit h-fit flex flex-col justify-center items-center">
            <TextAnimate 
              className="w-fit text-xl sm:text-3xl secondary-light text-center font-medium font-[raleway]" 
              animation="blurInUp" 
              by="word" 
              duration={1} 
              delay={3} 
              once 
            >
              Think it. Solve it. Build it.
            </TextAnimate>
            <TextAnimate 
              className="w-fit text-xl sm:text-3xl secondary-light text-center font-medium font-[raleway] px-2" 
              animation="blurInUp" 
              by="word" 
              duration={0.5} 
              delay={4} 
              once 
            >
              This is how I turn ideas into an Interactive Reality.
            </TextAnimate>
          </div>
        </div>
      </Orb>
    </motion.div>
  )
}
