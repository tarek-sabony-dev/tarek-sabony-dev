"use client"

import { AnimatePresence, delay, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingAnimation() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    setIsExpanded(true)
    // Hide after animation (4s delay + 0.5s fade = 4.5s)
    const timeout = setTimeout(() => setShow(false), 4500)
    return () => clearTimeout(timeout)
  }, [])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.5 }}
      className="w-full h-screen flex justify-center items-center absolute inset-0 bg-black"
    >
      <motion.div
        initial={{ height: '0px', opacity: 0.5 }}
        animate={{ height: isExpanded ? '100%' : '10px', opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className="w-full flex justify-center items-center bg-[#e8e8e3]"
      >
        <div className="p-4 text-black">
          This div grows to full height over 3 seconds
        </div>
      </motion.div>
    </motion.div>
  )
}