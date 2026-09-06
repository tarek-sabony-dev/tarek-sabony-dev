"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { TextAnimate } from "@/components/ui/TextAnimate"
import { cn } from "@/lib/utils"

interface ErrorPageProps {
  error?: Error & { digest?: string }
  reset?: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const [errorCode, setErrorCode] = useState<string>("500")

  useEffect(() => {
    // Generate a pseudo error code from the digest or just use 500
    if (error?.digest) {
      const hash = Array.from(error.digest).reduce((acc, char) => acc + char.charCodeAt(0), 0)
      setErrorCode(String((hash % 900) + 100))
    }
  }, [error])

  return (
    <div className="w-full h-lvh flex flex-col justify-center items-center bg-dark primary-dark font-[raleway] relative overflow-hidden">
      {/* Animated error number */}
      <div className="relative flex items-center justify-center gap-1 sm:gap-2">
        <Suspense key="error-digit">
          {errorCode.split("").map((digit, index) => (
            <motion.span
              key={`${digit}-${index}`}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-[clamp(8rem,4.5rem+8.654vw,16rem)] font-bold font-[lora] primary-dark leading-none"
            >
              {digit}
            </motion.span>
          ))}
        </Suspense>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: errorCode.split("").length * 0.2 + 0.4, duration: 0.8 }}
          className="text-[clamp(2rem,1rem+3vw,4rem)] font-bold font-[lora] primary-dark leading-none"
        >
          !
        </motion.span>
      </div>

      {/* Divider line */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: errorCode.split("").length * 0.2 + 0.6, duration: 1, ease: "easeOut" }}
        className="w-full h-px bg-light my-8 sm:my-12 max-w-xs sm:max-w-sm"
      />

      {/* Message */}
      <div className="w-full flex flex-col justify-center items-center gap-4 px-4 sm:px-8">
        <TextAnimate
          className="w-fit text-center text-base sm:text-xl secondary-dark"
          animation="blurInUp"
          by="word"
          duration={0.8}
          delay={errorCode.split("").length * 0.2 + 0.8}
          once
        >
          Something went wrong
        </TextAnimate>
        <TextAnimate
          className="w-fit text-center text-xs sm:text-sm secondary-dark"
          animation="blurInUp"
          by="word"
          duration={0.6}
          delay={errorCode.split("").length * 0.2 + 1.1}
          once
        >
          An unexpected error has occurred. Please try again or return home.
        </TextAnimate>
      </div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: errorCode.split("").length * 0.2 + 1.4, duration: 0.5, ease: "easeOut" }}
        className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
      >
        {/* Retry button */}
        <button
          onClick={reset}
          className={cn(
            "relative inline-flex items-center justify-center gap-2 px-6 py-2.5",
            "text-sm font-medium text-[#E8E8E3]",
            "border border-[#E8E8E3]/20 rounded-sm",
            "hover:bg-[#E8E8E3]/5 transition-all duration-300",
          )}
        >
          <span className="relative">Try again</span>
        </button>

        {/* Home button */}
        <Link
          href="/"
          className={cn(
            "relative inline-flex items-center justify-center gap-2 px-6 py-2.5",
            "text-sm font-medium text-[#E8E8E3]",
            "border border-[#E8E8E3]/20 rounded-sm",
            "hover:bg-[#E8E8E3]/5 transition-all duration-300",
          )}
        >
          <span className="relative">Go back home</span>
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
