"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail } from "lucide-react"

interface OrganizerProps {
  name: string
  position: string
  image: string
  bio: string
  instagram: string
}

function OrganizerCard({ name, position, image, bio, instagram }: OrganizerProps) {
  return (
    <Card className="bg-white/5 border-none overflow-hidden hover:bg-white/10 transition-colors duration-300 h-full hover-scale">
      <CardContent className="p-0">
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-purple-400 mb-3 sm:mb-4 text-sm">{position}</p>
          <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{bio}</p>
          <div className="flex gap-4">
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-purple-400 transition-colors p-1 -ml-1"
            >
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-purple-400 transition-colors p-1">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function OrganizersSection() {
  const organizers = [
    {
      name: "Arijit Banik",
      position: "CEO & Co-Founder",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arijit.jpg-20G1u77qmKF6JOd8XsHD5DR6iR6LMk.jpeg",
      bio: "Arijit oversee all operations ensures all the staff have the resources they need to succeed in their committees.",
      instagram: "Arij.2109",
    },
    {
      name: "Akanksha Mishra",
      position: "Group Secratory",
      image:
        "\akanksha 2.jpg",
      bio: "Manages group communication, records meetings, and handles administrative tasks. They ensure smooth information flow and organizational efficiency.",
      instagram: "akankksha9402",
    },
    {
      name: "Rudransh Singh",
      position: "CTO ( Chief Technology Officer )",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no%20head-lFaeGgvFb3uVmAYZUKqTjmTomcwn5P.png",
      bio: "Our tech expert manages the technical aspects of our online conference, ensuring a smooth virtual experience.",
      instagram: "theunlisted07",
    },
    {
      name: "Kaashvi",
      position: "Social Media Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kaashvi.jpg-IfpoYfKkjXAMT6PoCNr3uD5PXLrpKi.jpeg",
      bio: "Creates engaging content and manages the group's online presence across platforms. They aim to build community, promote the group, and track social media performance.",
      instagram: "meechan_77",
    },
    {
      name: "Ghanisth ",
      position: "Co-Secratory Social Media",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ghanisth.jpg-2STTNZPCMGiWM2N0IxmOBmrILG8yYS.jpeg",
      bio: "Provides administrative support, scheduling, and helps organize content for the social media manager. They assist in maintaining efficiency and smooth operation of social media activities.",
      instagram: "ghanisssttthhh",
    },
    {
      name: "Sia Chaney",
      position: "Workshop Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xia.jpg-kMBcmj9OJ0d4vb6JvNh9ZTePrZFI3h.jpeg",
      bio: " Plans and runs all event workshops and ensures smooth execution and goal achievement through setup and breakdown management.",
      instagram: "xia._.x",
    },
    {
      name: "Divyansh Sharma",
      position: "General Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/divyansh.jpg-2uMaNrYGfF3ITADuix4qia0XNOhgAy.jpeg",
      bio: "Divyansh is a passionate MUN enthusiast with experience in multiple international conferences.",
      instagram: "divyansh_udaivir_shokeen",
    },

    {
      name: "Aarush",
      position: "Designer & Creative Partner",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/divyansh.jpg-2uMaNrYGfF3ITADuix4qia0XNOhgAy.jpeg",
      bio: "Divyansh is a passionate MUN enthusiast with experience in multiple international conferences.",
      instagram: "divyansh_udaivir_shokeen",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-black" id="organizers">
      <div className="container px-4">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Meet Our Organizers
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto px-2 text-base sm:text-lg">
            Our dedicated team of young MUN enthusiasts works tirelessly to create an exceptional conference experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {organizers.map((organizer, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <OrganizerCard {...organizer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

