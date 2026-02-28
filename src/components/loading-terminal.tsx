"use client"

import { useEffect, useState } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

type Props = {
  duration?: number;
};

export default function LoadingTerminal({ duration = 10000 }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
        setShow(true);
        const t = setTimeout(() => setShow(false), duration);
        return () => clearTimeout(t);
      }
    } catch {
      // If localStorage isn't available, don't show loader
      setShow(false);
    }
  }, [duration]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-black/90">
      <div className="w-full max-w-2xl p-6">
        <Terminal className="w-full h-fit" sequence={false}>
          <AnimatedSpan>
            <span>
              <span className="text-blue-500">~/next/portfolio</span><span className="text-gray-500"> / on </span><span className="text-lime-500">main</span><span className="text-yellow-500"> !10 ?3</span>
            </span>
          </AnimatedSpan>
          <TypingAnimation duration={120} >
            ╰─ npm run dev
          </TypingAnimation>
    
          <AnimatedSpan delay={3000}>
            <span><br />&gt; portfolio@0.1.0 dev</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={3000}>
            <span>&gt; next dev</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4000}>
            <span><br /><span className="text-purple-400">▲ Next.js 16.1.6 </span><span>(Turbopack)</span></span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4000}>
            <span>- Local:         http://localhost:3000</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4000}>
            <span>- Network:       http://192.168.1.1:3000</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={5500}>
            <span><br /><span className="text-green-500">✓</span><span> Starting...</span></span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={6000}>
            <span><span className="text-green-500">✓</span><span> Ready in 1366ms</span></span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={6500}>
            <span>○ Compiling / ...</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={8000} className="text-muted-foreground">
            GET / 200 in 2.6s (compile: 2.3s, render: 306ms)
          </AnimatedSpan>
        </Terminal>
      </div>
    </div>
  );
}
