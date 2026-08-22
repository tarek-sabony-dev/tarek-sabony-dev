"use client"

import { MotionValue } from 'motion';
import HorizontalScrollText from '../ui/HorizontalScrollText';

export default function SkillsPage ({ scroll } : { scroll : MotionValue}) {
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark z-10">
      <HorizontalScrollText />
    </div>
  )
}