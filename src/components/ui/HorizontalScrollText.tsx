// app/components/HorizontalScrollText.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HorizontalScrollText() {
  // 1. Create a ref to attach to the container we want to track
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start when top of container hits bottom of viewport, end when bottom hits top
  });

  // 3. Transform the scroll progress into horizontal movement
  //    Adjust the range [-25%, 25%] to control how far the text moves
  const x = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    // This div is the scroll container we're tracking
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full" // Height determines scroll duration
    >
      {/* This div is sticky to keep the text in view while scrolling */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.h1
          style={{ x }}
          className="whitespace-nowrap text-6xl font-bold md:text-8xl lg:text-9xl"
        >
          Your Horizontal Scrolling Text Here
        </motion.h1>
      </div>
    </div>
  );
}