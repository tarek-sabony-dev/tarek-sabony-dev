"use client"

import { MotionValue } from 'motion';
import { TextReveal } from '../ui/scroll-text-reveal';

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10" >
      <TextReveal scroll={scroll} className='font-[raleway]'>
        I build fast, reliable, modern and user-friendly web applications that help businesses grow.
      </TextReveal>
      <div className="w-full h-575 flex justify-center items-center bg-[#121212] text-black text-8xl z-10">
        2
      </div>
    </div>
  )
}