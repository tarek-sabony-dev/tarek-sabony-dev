"use client"

import { MotionValue } from 'motion';
import { TextReveal } from '../ui/scroll-text-reveal';

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10" >
      <TextReveal>
        I build fast, modern websites that help businesses grow, available for freelance projects worldwide.
      </TextReveal>
    </div>
  )
}