"use client"

import { useScroll, useTransform, motion, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { LiaUniversitySolid } from "react-icons/lia";

export default function EducationSection () {
  const [firstTextReveal, setfirstTextReveal] = useState(false)
  const [secondTextReveal, setSecondTextReveal] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  
  const width = useTransform(scrollYProgress, [0, 0.2], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.1 && !firstTextReveal) {
      setfirstTextReveal(true)
    }  else if (latest < 0.1 && firstTextReveal) {
      setfirstTextReveal(false)
    }
    if (latest >= 0.5 && !secondTextReveal) {
      setSecondTextReveal(true)
    } else if (latest < 0.5 && secondTextReveal) {
      setSecondTextReveal(false)
    }
    console.log(firstTextReveal, secondTextReveal)
  })
  
  return (
    <div ref={ref} className="w-full h-[300svh] flex flex-col justify-start items-center relative bg-[#121212] text-black text-8xl z-10">
      <div className='w-full h-lvh sticky top-0 flex justify-between items-center flex-wrap gap-4 sm:gap-16 bg-transparent px-10 sm:px-20 lg:px-30 py-25 sm:py-50 '>
        <div className='w-fit h-fit flex flex-col justify-center items-start gap-8'>
          <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
            <div className="overflow-hidden relative">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: firstTextReveal && !secondTextReveal ? 0 : secondTextReveal ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                className="w-fit h-fit"
              >
                <LiaUniversitySolid color="white" size={38} />
              </motion.div>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: secondTextReveal ? 0 : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: secondTextReveal ? 1 : 0 }}
                className="w-fit h-fit absolute top-0 left-0"
              >
                <GrTechnology color="white" size={38} />
              </motion.div>
            </div>
            <motion.div 
              className="w-full h-px bg-[#e8e8e3] "
              style={{ width }}
              >
            </motion.div>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2 relative">
            {/* First text set */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: firstTextReveal && !secondTextReveal ? 0 : secondTextReveal ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                className="w-full font-[raleway] font-semibold text-3xl sm:text-4xl primary-dark"
              >
                ITE Student
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: firstTextReveal && !secondTextReveal ? 0 : secondTextReveal ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                className="w-fit sm:w-3/4 font-[raleway] text-base sm:text-xl secondary-dark whitespace-pre-line"
              >
                I started my Information Technology Engineering journey in 2023 at Damascus University.<br />
                where I built a strong foundation in algorithms, systems thinking, and software architecture.
              </motion.p>
            </div>
            {/* Second text set - positioned absolutely to overlay */}
            <div className="absolute top-0 left-0 w-full flex flex-col gap-2">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: secondTextReveal ? 0 : "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: secondTextReveal ? 1 : 0 }}
                  className="w-full font-[raleway] font-semibold text-3xl sm:text-4xl primary-dark"
                >
                  Problem Solving
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: secondTextReveal ? 0 : "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: secondTextReveal ? 1 : 0 }}
                  className="w-fit sm:w-3/4 font-[raleway] text-base sm:text-xl secondary-dark whitespace-pre-line"
                  >
                  My study blends well with my development skills, using the engineer mindset I build complete technical solutions that scale, moving beyond “making it work” to “making it work reliably, securely and efficiently”.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <Image className="w-full sm:min-w-lg max-w-3xl flex-1 rounded-xl grayscale" width={768} height={512} src={"/damascus-university.png"} alt="damascus-university" />
      </div>
    </div>
  )
}