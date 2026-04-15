"use client"

import { MotionValue } from 'motion';
import { TextReveal } from '../ui/scroll-text-reveal';
import EducationSection from "../education-section";

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10">
      <TextReveal className='font-[raleway]'>
        I build fast, reliable, modern and user-friendly web applications that help businesses grow.
      </TextReveal>
      <EducationSection />
    </div>
  )
}