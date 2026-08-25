"use client";

import { motion, MotionValue, useInView, useTransform } from "motion/react";
import { useRef } from "react";


export default function HorizontalScrollText({ text, scroll } : { text: string, scroll: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useTransform(scroll, [0, 1], ["3%", "-250%"])
  const height = useTransform(scroll, [0.4, 1], ["0%", "100%"])

  return (
    <motion.div 
      style={{ height }}  
      className="w-full flex items-center justify-start bg-light"
    >
      <motion.div
        ref={ref}
        style={{ x }}
        className="w-full whitespace-nowrap font-[raleway] font-medium text-[64px] primary-dark mix-blend-difference sm:text-[175px] py-8"
      >
        {text}
      </motion.div>
    </motion.div>
  );
}