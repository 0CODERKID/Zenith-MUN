"use client"

import { useState, useEffect } from "react"

export default function Cursor() {
  // Only show cursor on desktop
  const [isMobile, setIsMobile] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Check if we're in a browser and if it's not a mobile device
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check initially
    checkMobile()

    // Update on resize
    window.addEventListener("resize", checkMobile)

    // Track mouse position with standard DOM methods
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Add event listener safely
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile)
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // Don't render anything on mobile
  if (isMobile) return null

  return (
    <>
      <div
        className="fixed w-10 h-10 rounded-full border-2 border-purple-500 pointer-events-none z-50 opacity-30"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="fixed w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: "transform 0.05s linear",
        }}
      />
    </>
  )
}

