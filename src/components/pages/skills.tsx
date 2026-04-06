"use client"

import { useTransform, motion, useScroll } from "motion/react";
import { MotionValue } from 'motion';
import { TextReveal } from '../ui/scroll-text-reveal';
import { useRef } from "react";
import { IconBase, IconsManifest } from "react-icons";
import { LiaAddressCardSolid, LiaUniversitySolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { RiGovernmentLine } from "react-icons/ri";

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const width = useTransform(scrollYProgress, [0, 0.2], ['0%', '45%'])

  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10">
      <TextReveal className='font-[raleway]'>
        I build fast, reliable, modern and user-friendly web applications that help businesses grow.
      </TextReveal>
      <div ref={ref} className="w-full h-[300svh] flex flex-col justify-start items-center relative bg-[#121212] text-black text-8xl z-10">
        <div className='w-full h-lvh sticky top-0 flex flex-col justify-between items-center bg-transparent px-10 sm:px-50 py-25 sm:py-50 '>
          <div className='w-full h-fit flex flex-col justify-center items-start gap-8'>
            <LiaUniversitySolid color="white" size={48} />
            <motion.div 
              className="w-full h-px bg-[#e8e8e3] "
              style={{ width }}
            >
            </motion.div>
            <div className="w-fit h-fit flex flex-col gap-2">
              <span className="w-full font-[raleway] font-medium text-2xl sm:text-4xl primary-dark">
                Information Technology Engineering Student
              </span>
              <span className="w-3/4 font-[raleway] text-xl secondary-dark">
                Began my ITE journy in <span className="font-mono">2023</span> at <span className="font-bold">Damascus University.</span>
              </span>
            </div>
          </div>
          <div className='w-full h-fit flex flex-col justify-center items-end gap-8'>
            <GrTechnology color="white" size={48} />
            <motion.div 
              className="w-full h-px bg-[#e8e8e3] "
              style={{ width }}
            >
            </motion.div>
            <div className="w-fit h-fit flex flex-col justify-center items-end gap-2">
              <span className="w-full font-[raleway] font-medium text-2xl sm:text-4xl text-right primary-dark">
                Full-Stack Development
              </span>
              <span className="w-3/4 font-[raleway] text-xl text-right secondary-dark">
                From frontend interactions to backend APIs, I build complete web solutions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}