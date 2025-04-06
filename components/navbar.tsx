"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-3 sm:py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            ZENITH MUN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["About", "Organizers", "Committees", "Perks", "Countries", "FAQ", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
            <Button 
            className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white"
            onClick={() => window.open('https://forms.gle/xLMXCSo46XdWDUDV9')}
            >
            Register Now
            </Button>
        </nav>

        {/* Mobile Navigation Toggle - larger touch target */}
        <button
          className="md:hidden text-white p-3 -mr-3 touch-target"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - improved spacing and touch targets */}
      {isOpen && (
    <div className="md:hidden fixed top-[56px] left-0 right-0 bottom-0 bg-black/95 backdrop-blur-md z-50 overflow-auto">
      <nav className="container py-6 flex flex-col gap-2">
        {["About", "Organizers", "Committees", "Perks", "Countries", "FAQ", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-base font-medium text-white/80 hover:text-white transition-colors py-5 border-b border-white/10 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        
        {/* Register Button */}
        <a 
          href="https://forms.gle/xLMXCSo46XdWDUDV9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-6 text-lg text-center font-medium rounded hover:opacity-90 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          Register Now
        </a>
</nav>
        </div>
      )}
    </header>
  )
}

