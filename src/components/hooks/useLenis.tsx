"use client";

import { useEffect, useRef, useCallback } from "react";
import Lenis from "@studio-freight/lenis";

let globalLenis: Lenis | null = null;

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(globalLenis);

  useEffect(() => {
    if (!globalLenis) {
      // This should only happen if the provider isn't used
      console.warn("Lenis not initialized. Make sure LenisProvider is mounted.");
      return;
    }
    lenisRef.current = globalLenis;
  }, []);

  const scrollTo = useCallback((
    target: string | HTMLElement | number,
    options?: {
      offset?: number;
      immediate?: boolean;
      duration?: number;
      easing?: (t: number) => number;
    }
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  }, []);

  const scrollToTop = useCallback((immediate?: boolean) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate });
    }
  }, []);

  const scrollToBottom = useCallback((immediate?: boolean) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(lenisRef.current.limit, { immediate });
    }
  }, []);

  const stop = useCallback(() => {
    if (lenisRef.current) lenisRef.current.stop();
  }, []);

  const start = useCallback(() => {
    if (lenisRef.current) lenisRef.current.start();
  }, []);

  const resize = useCallback(() => {
    if (lenisRef.current) lenisRef.current.resize();
  }, []);

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToTop,
    scrollToBottom,
    stop,
    start,
    resize,
  };
}

// For advanced usage - set global instance from provider
export function setGlobalLenis(lenis: Lenis) {
  globalLenis = lenis;
}