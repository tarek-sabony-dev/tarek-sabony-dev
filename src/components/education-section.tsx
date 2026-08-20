"use client"

import { useScroll, useTransform, motion, useMotionValueEvent, AnimatePresence } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react"
import { GrTechnology } from "react-icons/gr"
import { LiaUniversitySolid } from "react-icons/lia"

type Phase = "hidden" | "first" | "second"

const CIRCUMFERENCE = 2 * Math.PI * 16  // r=16

export default function EducationSection() {
  const [phase, setPhase] = useState<Phase>("hidden")
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

  // --- Motion values ---
  const width = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"])
  const totalProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  const dashOffset = useTransform(totalProgress, (val) => {
    const p = val <= 50 ? val / 50 : (val - 50) / 50
    return CIRCUMFERENCE - p * CIRCUMFERENCE
  })

  // --- Phase management ---
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.5 && phase !== "second") {
      setPhase("second")
    } else if (latest >= 0.1 && latest < 0.5 && phase !== "first") {
      setPhase("first")
    } else if (latest < 0.1 && phase !== "hidden") {
      setPhase("hidden")
    }
  })

  // --- Helper for text sliding ---
  const getTextY = (block: "first" | "second") => {
    if (block === "first") {
      if (phase === "first") return 0
      if (phase === "second") return "-100%"
      return "100%"
    }
    return phase === "second" ? 0 : "100%"
  }

  // --- Render phase number (with animation) ---
  const renderPhaseNumber = () => {
    const label = phase === "first" ? "0" : phase === "second" ? "1" : "—"
    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={phase}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute text-white font-mono font-bold text-sm sm:text-base leading-none"
        >
          {label}
        </motion.span>
      </AnimatePresence>
    )
  }

  return (
    <div
      ref={ref}
      className="w-full h-[370vh] flex flex-col justify-start items-center relative bg-[#121212] text-black z-10"
    >
      <div className="w-full h-lvh sticky top-0 flex justify-between items-center flex-wrap lg:flex-nowrap gap-4 sm:gap-16 bg-transparent px-10 sm:px-20 lg:px-30 py-25 sm:py-50">
        {/* Left column: content */}
        <div className="w-fit h-fit flex flex-col justify-center items-start gap-8">
          {/* Icons + progress ring row */}
          <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
            <div className="w-full flex justify-between items-center">
              {/* Sliding icons */}
              <div className="relative h-9.5 w-9.5 overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: getTextY("first") }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: phase === "first" ? 0.5 : 0 }}
                  className="absolute inset-0"
                >
                  <LiaUniversitySolid color="white" size={38} />
                </motion.div>
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: getTextY("second") }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: phase === "second" ? 1 : 0 }}
                  className="absolute inset-0"
                >
                  <GrTechnology color="white" size={38} />
                </motion.div>
              </div>

              {/* Phase indicator with ring */}
              <div className="flex items-center gap-3">
                <span className="text-white/30 text-xs font-mono tracking-widest">SECTION</span>
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeOpacity="0.15"
                    />
                    <motion.circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={dashOffset}
                      transition={{ duration: 0.05, ease: "linear" }}
                    />
                  </svg>
                  {renderPhaseNumber()}
                </div>
              </div>
            </div>

            <motion.div className="w-full h-px bg-[#e8e8e3]" style={{ width }} />
          </div>

          {/* Text blocks */}
          <div className="w-fit h-fit flex flex-col gap-2 relative">
            {/* First text (ITE Student) */}
            <div className="overflow-hidden">
              <motion.p
                animate={{ y: getTextY("first") }}
                initial={{ y: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: phase === "first" ? 0.65 : 0 }}
                className="w-full font-[raleway] font-semibold text-3xl sm:text-4xl primary-dark"
              >
                ITE Student
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                animate={{ y: getTextY("first") }}
                initial={{ y: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: phase === "first" ? 0.65 : 0 }}
                className="w-fit sm:w-3/4 font-[raleway] text-base sm:text-xl secondary-dark whitespace-pre-line"
              >
                I started my Information Technology Engineering journey in 2023 at Damascus University.
                <br />
                where I built a strong foundation in algorithms, systems thinking, and software architecture.
              </motion.p>
            </div>

            {/* Second text (Problem Solving) – absolutely positioned to overlay */}
            <div className="absolute top-0 left-0 w-full flex flex-col gap-2">
              <div className="overflow-hidden">
                <motion.p
                  animate={{ y: getTextY("second") }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: phase === "second" ? 1.15 : 0 }}
                  className="w-full font-[raleway] font-semibold text-3xl sm:text-4xl primary-dark"
                >
                  Problem Solving
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  animate={{ y: getTextY("second") }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: phase === "second" ? 1.15 : 0 }}
                  className="w-fit sm:w-3/4 font-[raleway] text-base sm:text-xl secondary-dark whitespace-pre-line"
                >
                  My study blends well with my development skills, using the engineer mindset I build complete
                  technical solutions that scale, moving beyond “making it work” to “making it work reliably,
                  securely and efficiently”.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: image */}
        <Image
          className="w-full sm:min-w-lg max-w-3xl flex-1 rounded-xl grayscale"
          width={768}
          height={512}
          src="/damascus-university.png"
          alt="damascus-university"
        />
      </div>
    </div>
  )
}