"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black to-purple-950/30" id="about">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative animate-fade-in order-2 md:order-1">
            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg shadow-purple-900/20">
              <Image
                src="\487492147_9954602731230492_8185762224211431359_n.jpg"
                alt="ZENITH MUN Conference"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className="animate-fade-in order-1 md:order-2" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              About ZENITH MUN
            </h2>
            <p className="text-white/80 mb-3 sm:mb-4 text-base sm:text-lg">
              ZENITH Model United Nations is an <span className="text-purple-400">innovative online conference</span>{" "}
              created by a passionate group of teenagers with a vision to make diplomatic discourse accessible to all.
            </p>
            <p className="text-white/80 mb-3 sm:mb-4 text-base sm:text-lg">
              Despite being new to the MUN circuit, our team is backed by{" "}
              <span className="text-purple-400">experienced staff and mentors</span> who have participated in numerous
              international conferences.
            </p>
            <p className="text-white/80 mb-5 sm:mb-6 text-base sm:text-lg">
              Our mission is to cultivate the next generation of global leaders by providing a{" "}
              <span className="text-purple-400">free platform</span> for diplomatic discourse, critical thinking, and
              international cooperation. At ZENITH, we believe in the power of youth to shape a better future.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg transform transition-transform hover:scale-105 hover:bg-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-1 sm:mb-2">4+</h3>
                <p className="text-white/70 text-xs sm:text-sm">Committees</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg transform transition-transform hover:scale-105 hover:bg-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2">35+</h3>
                <p className="text-white/70 text-xs sm:text-sm">Countries</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg transform transition-transform hover:scale-105 hover:bg-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-1 sm:mb-2">7+</h3>
                <p className="text-white/70 text-xs sm:text-sm">Organizers</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg transform transition-transform hover:scale-105 hover:bg-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2">100%</h3>
                <p className="text-white/70 text-xs sm:text-sm">Free Registration</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white w-full sm:w-auto">
              Our Vision
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

