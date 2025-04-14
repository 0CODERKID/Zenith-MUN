"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface CommitteeProps {
  name: string
  shortName: string
  type: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

function CommitteeCard({ name, shortName, type, description, level }: CommitteeProps) {
  const levelColor =
    level === "Beginner" ? "text-green-400" : level === "Intermediate" ? "text-yellow-400" : "text-red-400"

  return (
    <Card className="bg-white/5 border-none overflow-hidden hover:bg-white/10 transition-colors duration-300 h-full hover-scale">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/10 ${levelColor}`}>{level}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{name}</h3>
        <p className="text-purple-400 text-xs sm:text-sm mb-3 sm:mb-4">{type}</p>
        <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{description}</p>
        <Link href="/agendas" passHref>
          <Button variant="link" className="p-0 text-cyan-400 hover:text-cyan-300 text-sm">
            Learn More <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default function CommitteesSection() {
  const committees = [
    {
      name: "United Nations Human Rights Council",
      shortName: "UNHRC",
      type: "Specialized Agency",
      description: "Promote and protect human rights around the world through policy recommendations and resolutions.",
      level: "Beginner" as const,
    },
    {
      name: "UN Commission on the Status of Women",
      shortName: "UNCSW",
      type: "Specialized Agency",
      description: "Address issues related to gender equality and the advancement of women's rights globally.",
      level: "Intermediate" as const,
    },
    {
      name: "Historical Crisis Committee",
      shortName: "HCC",
      type: "Crisis Committee",
      description:
        "Navigate through historical events with rapid developments requiring quick thinking and adaptability.",
      level: "Advanced" as const,
    },
    {
      name: "International Press",
      shortName: "IP",
      type: "Specialized Committee",
      description: "Document and report on the proceedings of all committees, creating a conference newspaper.",
      level: "Intermediate" as const,
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-purple-950/30 to-black" id="committees">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Our Committees
            </h2>
            <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
              ZENITH MUN offers four distinct committees catering to delegates of all experience levels. From
              beginner-friendly councils to challenging crisis committees, there's something for everyone.
            </p>
            <p className="text-white/80 text-base sm:text-lg">
              Each committee is carefully designed to provide an authentic UN experience with thoroughly researched
              topics and expert guidance from our experienced chairs.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-purple-900/10">
              <div className="relative">
                <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-2 border-purple-500/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-purple-500/20 animate-float">
                    <p className="text-purple-400 font-semibold text-center text-sm sm:text-base">UNHRC</p>
                  </div>
                  <div
                    className="bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-cyan-500/20 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <p className="text-cyan-400 font-semibold text-center text-sm sm:text-base">UNCSW</p>
                  </div>
                  <div
                    className="bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-purple-500/20 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <p className="text-purple-400 font-semibold text-center text-sm sm:text-base">HCC</p>
                  </div>
                  <div
                    className="bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-cyan-500/20 animate-float"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <p className="text-cyan-400 font-semibold text-center text-sm sm:text-base">IP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {committees.map((committee, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CommitteeCard {...committee} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
