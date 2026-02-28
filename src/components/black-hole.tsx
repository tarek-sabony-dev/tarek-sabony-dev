"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei"
import * as THREE from "three"

export function BlackHole() {
  const diskRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (diskRef.current) {
      diskRef.current.rotation.z = t * 0.2
    }
  })

  return (
    <group>
      {/* Event Horizon - The black core */}
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial color="black" />
      </Sphere>

      {/* Accretion Disk */}
      <mesh ref={diskRef} rotation={[-Math.PI / 2.2, 0.2, 0]}>
        <ringGeometry args={[1.2, 3.5, 128]} />
        <meshStandardMaterial
          color="#f0f"
          side={THREE.DoubleSide}
          transparent
          opacity={0.6}
          emissive="#f0f"
          emissiveIntensity={5}
        />
      </mesh>

      {/* Outer glow/distortion */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[1.1, 64, 64]}>
          <MeshDistortMaterial
            color="#0cf"
            speed={3}
            distort={0.3}
            radius={1}
            transparent
            opacity={0.2}
          />
        </Sphere>
      </Float>

      {/* Ambient lighting inside the group for better disk visibility */}
      <pointLight intensity={10} color="#f0f" distance={10} />
    </group>
  )
}
