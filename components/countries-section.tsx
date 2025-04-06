"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function CountriesSection() {
  const [searchTerm, setSearchTerm] = useState("")

  const countries = [
    "Afghanistan",
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "Colombia",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Italy",
    "Japan",
    "Kenya",
    "Mexico",
    "Nigeria",
    "Pakistan",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Venezuela",
    "Vietnam",
  ]

  const filteredCountries = countries.filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section className="py-16 md:py-20 bg-black" id="countries">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Available Countries
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto px-2 text-base sm:text-lg">
            ZENITH MUN offers 35 countries for delegates to represent. Choose your preferred country during
            registration.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8 md:mb-12 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Input
            type="text"
            placeholder="Search countries..."
            className="bg-white/5 border-white/20 text-white pl-10 h-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredCountries.map((country, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.02}s` }}>
              <Card className="bg-white/5 border-none hover:bg-white/10 transition-all duration-300 h-full hover-scale">
                <CardContent className="p-3 sm:p-4 flex items-center justify-center h-full">
                  <p className="text-white/80 text-center text-sm sm:text-base">{country}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <p className="text-white/60 text-center mt-8">No countries found matching your search.</p>
        )}
      </div>
    </section>
  )
}

