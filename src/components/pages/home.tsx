"use client"

import Orb from "../ui/Orb";
import { motion, MotionValue, useTransform } from 'framer-motion'
import { TextAnimate } from "../ui/text-animate";
import { Triangle } from "lucide-react";

export default function HomePage ({ scroll } : { scroll: MotionValue<number> }) {
  const y = useTransform(scroll, [0, 1], [0, 1600]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="w-full h-svh relative overflow-hidden"
      style={{ y }}
      >
      <Orb>
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
          <TextAnimate animation="slideUp" by="character" duration={1} delay={2} once className="w-fit text-5xl sm:text-9xl text-[#171717] font-medium font-[lora]" >
            Tarek Sabony
          </TextAnimate>
          <Triangle size={14} color="#6B645C" fill="#6B645C" />
          <div className="w-fit h-fit flex flex-col justify-center items-center">
            <TextAnimate animation="slideUp" by="word" duration={1} delay={3} once className="w-fit text-xl sm:text-3xl text-[#6B645C] text-center font-medium font-[raleway]" >
              Think it. Solve it. Build it.
            </TextAnimate>
            <TextAnimate animation="slideUp" by="word" duration={1.5} delay={3.5} once className="w-fit text-xl sm:text-3xl text-[#6B645C] text-center font-medium font-[raleway] px-2" >
              This is how I turn ideas into an Interactive Reality.
            </TextAnimate>
          </div>
        </div>
      </Orb>
    </motion.div>
  )
}