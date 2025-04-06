"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import OrganizersSection from "@/components/organizers-section"
import CommitteesSection from "@/components/committees-section"
import CountriesSection from "@/components/countries-section"
import PerksSection from "@/components/perks-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Cursor from "@/components/cursor"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Simple timeout for loader with no DOM manipulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 mb-8">
          ZENITH MUN
        </h1>
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full animate-progress bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <main className="relative overflow-hidden">
      <Cursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OrganizersSection />
      <CommitteesSection />
      <PerksSection />
      <CountriesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

