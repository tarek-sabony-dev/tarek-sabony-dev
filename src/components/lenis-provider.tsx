"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { setGlobalLenis } from "./hooks/useLenis";

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: "vertical" | "horizontal";
    gestureOrientation?: "vertical" | "horizontal" | "both";
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    lerp?: number;
  };
  className?: string;
}

const defaultOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  infinite: false,
  lerp: 0.1,
};

export default function LenisProvider({ 
  children, 
  options = defaultOptions,
  className = ""
}: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Merge default options with provided options
    const mergedOptions = { ...defaultOptions, ...options };
    
    // Initialize Lenis
    const lenis = new Lenis(mergedOptions);
    
    // Set global instance for hooks
    setGlobalLenis(lenis);
    
    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    const rafId = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setGlobalLenis(null as any);
    };
  }, [options]);

  return <div className={className}>{children}</div>;
}