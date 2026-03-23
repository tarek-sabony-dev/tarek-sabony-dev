"use client"

import { MotionValue } from 'motion';
import ScrollRevealText from '../ui/scroll-reveal-text';

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10" >
      <ScrollRevealText height='500vh'>
        What I Do
      </ScrollRevealText>
    </div>
  )
}