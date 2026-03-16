"use client"

import LoadingAnimation from "@/components/loading";
import HomePage from "@/components/pages/home";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2 } from "lucide-react";

export default function Home () {
  const [showLoading, setShowLoading] = useState(true)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Hide after animation (8s delay + 0.5s fade = 8.5s)
    const timeout = setTimeout(() => setShowLoading(false), 8500)
    return () => clearTimeout(timeout)
  }, [])

  // if(showLoading) return <LoadingAnimation />

  return (
    <main className="bg-[#e8e8e3] flex flex-col">
      <HomePage scroll={scrollYProgress} />
      <div className="w-full h-375 bg-[#080807] z-10">
        saddddddd
      </div>


      <TextAnimate 
        className="w-fit h-fit fixed bottom-4 left-4 text-xs sm:text-base text-[#e8e8e3] font-medium font-[lora] mix-blend-difference z-10"
        animation="slideUp"
        by="text"
        duration={1.5}
        delay={0.5}
        once
      >
        Think it. Solve it. Build it.
      </TextAnimate>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        className="w-fit h-fit fixed top-6 right-6 mix-blend-difference z-10"
      >
        <Code2 size={28} color="#e8e8e3" />
      </motion.div>
      <TextAnimate animation="slideLeft" by="text" duration={1.5} delay={0.5} once className="w-fit hidden sm:inline-block fixed top-1/4 right-6 text-3xl text-[#e8e8e3] text-center font-medium font-[raleway] leading-12 mix-blend-difference z-10" >
        {`D\nE\nV\nE\nL\nO\nP\nE\nR`}
      </TextAnimate>
    </main>
  );
}



