"use client";

import { motion, MotionValue, useTransform } from "motion/react";
import { ReactNode } from "react";

interface HorizontalScrollTextProps {
  scroll: MotionValue
  children: ReactNode
}

export default function HorizontalScrollText({ children, scroll } : HorizontalScrollTextProps) {
  const x = useTransform(scroll, [0, 1], ["5%", "-250%"])
  const height = useTransform(scroll, [0.2, 1], ["0%", "100%"])

  return (
    <motion.div 
      style={{ height }}  
      className="w-full flex items-center justify-start bg-light"
    >
      <motion.div
        style={{ x }}
        className="w-full whitespace-nowrap font-[raleway] font-semibold text-[64px] primary-dark mix-blend-difference sm:text-[150px] py-8"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}