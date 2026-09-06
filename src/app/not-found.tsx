"use client"

import { Suspense } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { TextAnimate } from "@/components/ui/TextAnimate"

export default function NotFoundPage() {
  return (
    <div className="w-full h-lvh flex flex-col justify-center items-center bg-[#080807] text-[#E8E8E3] font-[raleway] relative overflow-hidden">
      {/* Animated 404 number */}
      <div className="relative flex items-center justify-center">
        {["4", "0", "4"].map((digit, index) => (
          <Suspense key={index}>
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-[clamp(8rem,4.5rem+8.654vw,16rem)] font-bold font-[lora] primary-light leading-none"
            >
              {digit}
            </motion.span>
          </Suspense>
        ))}
      </div>

      {/* Divider line */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="w-full h-px bg-[#E8E8E3] my-8 sm:my-12 max-w-xs sm:max-w-sm"
      />

      {/* Message */}
      <div className="w-full flex flex-col justify-center items-center gap-4 px-4 sm:px-8">
        <TextAnimate
          className="w-fit text-center text-base sm:text-xl secondary-dark"
          animation="blurInUp"
          by="word"
          duration={0.8}
          delay={1}
          once
        >
          Page not found
        </TextAnimate>
        <TextAnimate
          className="w-fit text-center text-xs sm:text-sm secondary-dark"
          animation="blurInUp"
          by="word"
          duration={0.6}
          delay={1.3}
          once
        >
          The page you are looking for doesn&apos;t exist or has been moved.
        </TextAnimate>
      </div>

      {/* Back to home link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
        className="mt-8 sm:mt-12"
      >
        <Link
          href="/"
          className="relative inline-flex items-center gap-2 text-sm font-medium text-[#E8E8E3] hover:secondary-dark transition-colors"
        >
          <span className="relative">
            Go back home
          </span>
          <motion.span
            className="text-xs"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </div>
  )
}
