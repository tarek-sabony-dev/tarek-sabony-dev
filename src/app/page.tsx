"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { BlackHole } from "@/components/black-hole"
import { ThemeToggler } from "@/components/theme-toggler"
import { Suspense } from "react"

export default function PortfolioPage() {
  return (
    <main className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggler />
      </div>

      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        className="h-full w-full"
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        <Suspense fallback={null}>
          <BlackHole />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-6xl font-bold tracking-tighter opacity-20 select-none">
          PORTFOLIO
        </h1>
      </div>
    </main>
  )
}
