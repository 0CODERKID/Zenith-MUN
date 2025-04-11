"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Check } from "lucide-react"

// This would typically come from an API or database
// For this example, we'll hardcode some taken countries
const INITIAL_TAKEN_COUNTRIES = ["United States", "China", "Russia", "France", "United Kingdom"]

export default function CountriesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [takenCountries, setTakenCountries] = useState<string[]>(INITIAL_TAKEN_COUNTRIES)

  // In a real implementation, you would fetch this data from your backend
  useEffect(() => {
    // Simulating an API call to get taken countries
    // Replace this with your actual API call
    const fetchTakenCountries = async () => {
      try {
        // const response = await fetch('/api/taken-countries');
        // const data = await response.json();
        // setTakenCountries(data.countries);

        // For now, we'll use the hardcoded list
        setTakenCountries(INITIAL_TAKEN_COUNTRIES)
      } catch (error) {
        console.error("Error fetching taken countries:", error)
      }
    }

    fetchTakenCountries()
  }, [])

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

  const isCountryTaken = (country: string) => takenCountries.includes(country)

  return (
    <section className="py-16 md:py-20 bg-black" id="countries">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Available Countries
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto px-2 text-base sm:text-lg">
            ZENITH MUN offers 35 countries for delegates to represent. Choose your preferred country during
            registration. Countries marked as taken have already been assigned.
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
          {filteredCountries.map((country, index) => {
            const taken = isCountryTaken(country)
            return (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.02}s` }}>
                <Card
                  className={`border-none transition-all duration-300 h-full ${
                    taken ? "bg-purple-900/20 hover:bg-purple-900/30" : "bg-white/5 hover:bg-white/10 hover-scale"
                  }`}
                >
                  <CardContent className="p-3 sm:p-4 flex items-center justify-between h-full">
                    <p className={`${taken ? "text-purple-300/80" : "text-white/80"} text-sm sm:text-base`}>
                      {country}
                    </p>
                    {taken && (
                      <div className="flex items-center">
                        <span className="text-xs text-purple-300/80 mr-1">Taken</span>
                        <Check size={14} className="text-purple-400" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {filteredCountries.length === 0 && (
          <p className="text-white/60 text-center mt-8">No countries found matching your search.</p>
        )}

        <div className="mt-10 bg-white/5 p-6 rounded-xl animate-fade-in">
          <h3 className="text-xl font-semibold text-white mb-4">Country Selection</h3>
          <p className="text-white/80 mb-4">
            When you register, you'll be asked to provide your top 3 country preferences. We'll do our best to
            accommodate your choices, but countries are assigned on a first-come, first-served basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white/5 rounded"></div>
              <span className="text-white/80 text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-900/20 rounded"></div>
              <span className="text-purple-300/80 text-sm">Taken</span>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmPCZRxxB6WtuwFfbBXHLtRtOGxt2GwsM7YDM-_es_Z5BgmA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
