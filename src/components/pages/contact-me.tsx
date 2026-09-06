"use client"

import { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'motion/react'
import { TextAnimate } from '../ui/TextAnimate'
import Clock from '../ui/Clock'
import Link from 'next/link'

type ContactItem = {
  label: string
  href: string
}

const contacts: ContactItem[] = [
  {
    label: 'tareksabony@gmail.com',
    href: 'mailto:tareksabony@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tarek-sabony-dev',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tareksabony?stkn=c21td3Ricmc4ZDE2',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tarek-sabony-41000337b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
]

export default function ContactMePage ({ scroll }: { scroll : MotionValue }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const width = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"])

  return (
    <div ref={containerRef} className="w-full h-lvh relative bg-dark z-10">
      <motion.div
        style={{ y }}
        className="w-full h-[20vh] flex flex-col justify-start items-center bg-dark"
      />
      <div className="w-full h-fit flex flex-col justify-center items-start gap-4 px-8 sm:px-32" >
        <motion.div 
          className="h-px bg-light "
          style={{ width }}
        />
        <TextAnimate 
          className="text-xs sm:text-base font-[raleway] font-semibold primary-dark pb-12"
          animation="slideUp"
          by="character"
          delay={0.2}
        >
          Socials //
        </TextAnimate>
        {/* contact info here */}
        <div className='w-full h-fit flex flex-col justify-center items-start gap-8 sm:gap-4 font-[raleway]'>
          {contacts.map((contact, index) => (
            <Link key={index} href={contact.href} target='_blank' rel="noopener noreferrer" className='text-base sm:text-lg font-semibold secondary-dark'>
              <TextAnimate animation='slideUp' by='character' delay={0.4}>
                {contact.label}
              </TextAnimate>
            </Link>
          ))}
          <div className='w-full h-fit flex flex-col justify-center items-start self-end'>
            <TextAnimate animation='slideUp' by='character' delay={0.4} className="w-full primary-dark sm:text-lg text-right">Location</TextAnimate>
            <TextAnimate animation='slideUp' by='character' delay={0.6} className="w-full secondary-dark sm:text-lg text-right">Damascus, Syria</TextAnimate>
          </div>
          <div className='w-full h-fit flex flex-col justify-center items-start self-end'>
            <TextAnimate animation='slideUp' by='character' delay={0.4} className="w-full primary-dark sm:text-lg text-right">Local Time</TextAnimate>
            <Clock />
          </div>
        </div>
      </div>
    </div>
  )
}
