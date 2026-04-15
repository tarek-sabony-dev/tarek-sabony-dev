"use client"

import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { TextAnimate } from "./ui/text-animate";

export default function EducationSection () {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  
  const width = useTransform(scrollYProgress, [0, 0.2], ['0%', '100%'])
  
  return (
    <div ref={ref} className="w-full h-[300svh] flex flex-col justify-start items-center relative bg-[#121212] text-black text-8xl z-10">
      <div className='w-full h-lvh sticky top-0 flex justify-between items-center flex-wrap gap-4 sm:gap-16 bg-transparent px-10 sm:px-20 lg:px-30 py-25 sm:py-50 '>
        <div className='w-fit h-fit flex flex-col justify-center items-start gap-8'>
          <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-fit h-fit"
              >
                <LiaUniversitySolid color="white" size={38} />
              </motion.div>
            </div>
            <motion.div 
              className="w-full h-px bg-[#e8e8e3] "
              style={{ width }}
              >
            </motion.div>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2">
            <TextAnimate
              className="w-full font-[raleway] font-semibold text-3xl sm:text-4xl primary-dark overflow-hidden"
              animate="slideUp"
              by="text"
            >
              ITE Student
            </TextAnimate>
            <TextAnimate
              className="w-fit font-[raleway] text-base sm:text-xl secondary-dark overflow-hidden"
              animate="slideUp"
              by="line"
              delay={0.1} 
            >
              {`I started my Information Technology Engineering journey in 2023 \nat Damascus University.`}
            </TextAnimate>
          </div>
        </div>
        <Image className="w-full sm:min-w-lg max-w-3xl flex-1 rounded-xl grayscale" width={768} height={512} src={"/damascus-university.png"} alt="damascus-university" />
      </div>
    </div>
  )
}