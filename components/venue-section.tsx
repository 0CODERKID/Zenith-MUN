"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Globe, Users, Video } from "lucide-react"

export default function VenueSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/30" id="venue">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-in text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Conference Platform
          </h2>
          <p className="animate-fade-in text-white/80 max-w-2xl mx-auto">
            ZENITH MUN is a 100% online conference, making it accessible to delegates from around the world. Participate
            from anywhere with an internet connection!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Online Conference Platform"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Online Platform</h3>
                  <p className="text-white/80">
                    Our secure and reliable video conferencing platform ensures smooth committee sessions and
                    interactions between delegates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Dates</h3>
                  <p className="text-white/80">December 15-18, 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Schedule</h3>
                  <p className="text-white/80">
                    Day 1: Virtual Registration & Opening Ceremony
                    <br />
                    Day 2-3: Online Committee Sessions
                    <br />
                    Day 4: Final Committee Sessions & Virtual Closing Ceremony
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Accessibility</h3>
                  <p className="text-white/80">
                    Join from anywhere in the world. All you need is an internet connection and a device to participate.
                  </p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white">Platform Details</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in bg-white/5 rounded-xl p-6" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Technical Requirements</h3>
            </div>
            <p className="text-white/80 mb-4">To participate fully in the online conference, you'll need:</p>
            <ul className="space-y-2 text-white/80">
              <li>Stable internet connection (minimum 2 Mbps)</li>
              <li>Computer, tablet, or smartphone</li>
              <li>Working microphone (essential for speaking in committee)</li>
              <li>Webcam (recommended but not required)</li>
            </ul>
          </div>

          <div className="animate-fade-in bg-white/5 rounded-xl p-6" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Global Participation</h3>
            </div>
            <p className="text-white/80 mb-4">Our online format offers numerous advantages:</p>
            <ul className="space-y-2 text-white/80">
              <li>No travel or accommodation costs</li>
              <li>Environmentally friendly (zero carbon footprint)</li>
              <li>Accessible to delegates from all countries</li>
              <li>Flexible participation from your home or school</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

