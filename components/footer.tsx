"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-12 animate-fade-in">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoooooooooooooo.jpg-oalplzxgXfE1ES4J6Am2kN0TDY31Zm.jpeg"
                  alt="ZENITH MUN Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                ZENITH MUN
              </h3>
            </div>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm">
              A free online Model United Nations conference created by teenagers, for teenagers. Elevating diplomatic
              discourse and fostering the next generation of global leaders.
            </p>
            <div className="flex gap-4 sm:gap-5">
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors p-2 -ml-2 touch-target">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors p-2 touch-target">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors p-2 touch-target">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors p-2 touch-target">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors p-2 touch-target">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-1">
              {["About", "Committees", "Perks", "Countries", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-purple-400 transition-colors text-sm py-2 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Resources</h3>
            <ul className="space-y-1">
              {[
                "Delegate Preparation Guide",
                "Rules of Procedure",
                "Position Paper Guidelines",
                "Conference Schedule",
                "Awards Criteria",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors text-sm py-2 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-3 sm:mb-4 text-sm">
              Stay updated with the latest news, committee updates, and important deadlines.
            </p>
            <div className="flex flex-col gap-2">
              <Input placeholder="Your email" className="bg-white/10 border-white/20 text-white h-12" />
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white h-12 mt-1">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} ZENITH Model United Nations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-xs sm:text-sm py-2">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-xs sm:text-sm py-2">
              Terms of Service
            </a>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-black/70 z-50 animate-float w-12 h-12 shadow-lg"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  )
}
