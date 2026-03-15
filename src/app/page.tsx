"use client"

import LoadingAnimation from "@/components/loading";
import HomePage from "@/components/pages/home";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Code2 } from "lucide-react";

export default function Home () {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    // Hide after animation (8s delay + 0.5s fade = 8.5s)
    const timeout = setTimeout(() => setShowLoading(false), 8500)
    return () => clearTimeout(timeout)
  }, [])

  if(showLoading) return <LoadingAnimation />

  return (
    <main className="bg-[#e8e8e3]">
      <HomePage />
      {/* <div className="w-full h-250 bg-amber-600">
        saddddddd
      </div> */}


      <TextAnimate animation="slideUp" by="text" duration={1.5} delay={0.5} once className="w-fit h-fit fixed bottom-4 left-4 text-xs sm:text-base text-[#171717] font-medium font-[lora]" >
        Think it. Solve it. Build it.
      </TextAnimate>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        className="w-fit h-fit fixed top-6 right-6"
      >
        <Code2 size={28} color="#171717" />
      </motion.div>
      <TextAnimate animation="slideLeft" by="text" duration={1.5} delay={0.5} once className="w-fit hidden sm:inline-block absolute top-1/4 right-6 text-3xl text-[#6B645C] text-center font-medium font-[raleway] leading-12" >
        {`D\nE\nV\nE\nL\nO\nP\nE\nR`}
      </TextAnimate>
    </main>
  );
}



