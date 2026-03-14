"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import RotatingText from './ui/RotatingText'

export default function LoadingAnimation() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    setIsExpanded(true)
    // Hide after animation (8s delay + 0.5s fade = 8.5s)
    const timeout = setTimeout(() => setShow(false), 8500)
    return () => clearTimeout(timeout)
  }, [])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 8, duration: 0.5 }}
      className="w-full h-screen flex justify-center items-center absolute inset-0 bg-[#171717]"
    >
      <motion.div
        initial={{ height: '64px', opacity: 0.5 }}
        animate={{ height: isExpanded ? '100%' : '10px', opacity: 1 }}
        transition={{ duration: 8, ease: 'easeInOut' }}
        className="w-full flex justify-center items-center bg-[#e8e8e3]"
      >
        <div className='w-fit h-fit flex flex-col justify-center items-center gap-2'>
          <RotatingText 
            texts={["Think it", "Solve it", "Build it", ""]}
            mainClassName="w-fit text-5xl sm:text-9xl text-[#171717] font-medium font-[lora]"
            staggerFrom={"last"}
            loop={false}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            />
          <RotatingText
            texts={["01", "02", "03", ""]}
            mainClassName="w-fit text-base text-[#171717] font-medium font-[lora]"
            staggerFrom={"first"}
            loop={false}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            />
        </div>
      </motion.div>
    </motion.div>
  )
}