"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on initial load
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black" id="home">
      {/* Background with simple CSS animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>

        {/* Animated stars - pure CSS, fewer on mobile */}
        <div className="stars-container">
          {[...Array(isMobile ? 30 : 100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Simple animated globe - smaller on mobile */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-32 h-32" : "w-64 h-64"} rounded-full border-2 border-purple-500/30 animate-spin-slow`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-40 h-40" : "w-80 h-80"} rounded-full border border-cyan-500/20 animate-reverse-spin-slow`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-48 h-48" : "w-96 h-96"} rounded-full border border-purple-500/10 animate-spin-very-slow`}
        ></div>
      </div>

      {/* Content - improved mobile text sizing */}
      <div className="container relative z-10 text-center px-4 animate-fade-in">
        {/* 3D Animation behind the title */}
        <div className="relative">
          {/* 3D animated elements behind the text - fewer on mobile */}
          <div
            ref={animationRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          >
            {/* Multiple layers of animated shapes - reduced for mobile */}
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(isMobile ? 3 : 6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-400/10"
                  style={{
                    width: `${Math.random() * (isMobile ? 60 : 100) + 40}px`,
                    height: `${Math.random() * (isMobile ? 60 : 100) + 40}px`,
                    top: `${Math.random() * 100 - 50}%`,
                    left: `${Math.random() * 100 - 50}%`,
                    transform: `translateZ(${-100 + i * 20}px)`,
                    animation: `float ${5 + i}s ease-in-out infinite ${i}s`,
                    opacity: 0.6,
                  }}
                ></div>
              ))}
            </div>

            {/* Animated 3D text shadows - simplified for mobile */}
            {!isMobile && (
              <>
                <h1
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent opacity-20 blur-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                  style={{ animationDuration: "3s" }}
                >
                  ZENITH MODEL UN
                </h1>
                <h1
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-500/30 to-cyan-400/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-10 filter blur-md animate-pulse"
                  style={{ animationDuration: "4s" }}
                >
                  ZENITH MODEL UN
                </h1>
              </>
            )}
          </div>

          {/* Main title with 3D effect - simplified shadow for mobile */}
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 leading-tight relative z-10 ${isMobile ? "text-shadow-3d-mobile" : "text-shadow-3d"}`}
          >
            ZENITH MODEL UN
          </h1>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
          Join our FREE online diplomatic experience - Elevate your voice in global discourse
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-base sm:text-lg py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmPCZRxxB6WtuwFfbBXHLtRtOGxt2GwsM7YDM-_es_Z5BgmA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              Register Now
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white text-base sm:text-lg py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto mt-2 sm:mt-0"
          >
            <a href="#about" className="w-full h-full flex items-center justify-center">
              Learn More
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
    </section>
  )
}
