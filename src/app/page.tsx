"use client"

import LoadingAnimation from "@/components/loading";
import HomePage from "@/components/pages/home";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { useEffect, useRef, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import SkillsPage from "@/components/pages/skills";
import { useScroll, useTransform, motion } from "motion/react";
import AboutMePage from "@/components/pages/about-me";
import EducationPage from "@/components/pages/education";
import ProjectsPage from "@/components/pages/projects";
import ContactMePage from "@/components/pages/contact-me";

export default function Home () {
  const [showLoading, setShowLoading] = useState(true)
  const percentageRef = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll()

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const backgroundColor = useTransform(scrollYProgress, [0.85, 0.855], ['#121212', '#e8e8e3'])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Update the DOM directly to avoid re-rendering the entire page on every scroll frame
      if (percentageRef.current) {
        percentageRef.current.textContent = `${Math.round(latest * 100)}%`;
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress])

  useEffect(() => {
    // Hide after animation (8s delay + 0.5s fade = 8.5s)
    const timeout = setTimeout(() => setShowLoading(false), 8500)
    return () => clearTimeout(timeout)
  }, [])

  if(showLoading) return <LoadingAnimation />

  return (
    <main className="bg-light flex flex-col relative">
      {/* Pages */}
      <HomePage scroll={scrollYProgress} />
      <AboutMePage scroll={scrollYProgress} />
      <EducationPage scroll={scrollYProgress} />
      <SkillsPage scroll={scrollYProgress} />
      <ProjectsPage scroll={scrollYProgress} />
      <ContactMePage scroll={scrollYProgress} />

      {/* Sticky content */}
      <TextAnimate
        className="w-fit h-fit fixed bottom-4 left-4 text-[clamp(0.75rem,0.75vw,1rem)] text-[#e8e8e3] font-medium font-[lora] mix-blend-difference z-10"
        animation="slideUp"
        by="text"
        duration={1.5}
        delay={0.5}
        once
      >
        Think it  •  Solve it  •  Build it
      </TextAnimate>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
        className="w-fit h-fit fixed top-4 right-4 mix-blend-difference z-10"
      >
        <GiCoffeeBeans size={28} color="#e8e8e3" />
      </motion.div>
      <TextAnimate animation="slideLeft" by="text" duration={1.5} delay={0.5} once className="w-fit hidden sm:inline-block fixed top-1/4 right-4 text-3xl text-[#e8e8e3] text-center font-medium font-[raleway] leading-12 mix-blend-difference z-10" >
        {`D\nE\nV\nE\nL\nO\nP\nE\nR`}
      </TextAnimate>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
        className="w-fit h-fit flex justify-end items-center gap-0 sm:gap-2 fixed bottom-4 right-4 text-[#e8e8e3] font-medium font-[lora] mix-blend-difference z-10"
      >
        <div className="w-25 sm:w-50 h-0.5 flex justify-end bg-[#6B645C]/50">
          <motion.div 
            className="w-full h-full bg-[#e8e8e3] "
            style={{ width }}
            >
          </motion.div>
        </div>
        <span ref={percentageRef} className="w-8 text-right text-[clamp(0.75rem,0.75vw,1rem)]">
          {`0%`}
        </span>
      </motion.div>
    </main>
  );
}



