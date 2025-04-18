"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Check } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define committee types
type Committee = "UNHRC" | "UNCSW" | "HCC" | "IP" | "All"

// Define country interface
interface Country {
  name: string
  committee: Committee
  taken: boolean
}

export default function CountriesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState<Committee>("All")

  // Initial country data - this would be replaced with your actual data
  // You can update this array later with the actual committee assignments
  const [countries, setCountries] = useState<Country[]>([
    // UNHRC Countries
    { name: "Bangladesh", committee: "UNHRC", taken: true },
    { name: "Maldives", committee: "UNHRC", taken: false },
    { name: "Tuvalu", committee: "UNHRC", taken: true },
    { name: "Kiribati", committee: "UNHRC", taken: false },
    { name: "Vanuatu", committee: "UNHRC", taken: true },
    { name: "Nepal", committee: "UNHRC", taken: false },
    { name: "Haiti", committee: "UNHRC", taken: false },
    { name: "Mozambique", committee: "UNHRC", taken: true },
    { name: "Sudan", committee: "UNHRC", taken: false },
    { name: "Turkey", committee: "UNHRC", taken: false },
    { name: "Lebanon", committee: "UNHRC", taken: false },
    { name: "Jordan", committee: "UNHRC", taken: false },
    { name: "Pakistan", committee: "UNHRC", taken: false },
    { name: "Uganda", committee: "UNHRC", taken: false },
    { name: "Colombia", committee: "UNHRC", taken: false },
    { name: "United States", committee: "UNHRC", taken: false },
    { name: "China", committee: "UNHRC", taken: false },
    { name: "India", committee: "UNHRC", taken: true },
    { name: "Russia", committee: "UNHRC", taken: false },
    { name: "Brazil", committee: "UNHRC", taken: false },
    { name: "Indonesia", committee: "UNHRC", taken: false },
    { name: "South Africa", committee: "UNHRC", taken: false },
    { name: "European Union", committee: "UNHRC", taken: false },
    { name: "Canada", committee: "UNHRC", taken: false },
    { name: "Germany", committee: "UNHRC", taken: false },
    { name: "Sweden", committee: "UNHRC", taken: false },
    { name: "France", committee: "UNHRC", taken: false },
    { name: "Norway", committee: "UNHRC", taken: false },
    { name: "Mexico", committee: "UNHRC", taken: false },
    { name: "Australia", committee: "UNHRC", taken: false },

    // UNCSW Countries
    { name: "United States", committee: "UNCSW", taken: false },
    { name: "Canada", committee: "UNCSW", taken: true },
    { name: "Mexico", committee: "UNCSW", taken: false },
    { name: "Brazil", committee: "UNCSW", taken: false },
    { name: "Argentina", committee: "UNCSW", taken: false },
    { name: "United Kingdom", committee: "UNCSW", taken: false },
    { name: "France", committee: "UNCSW", taken: false },
    { name: "Germany", committee: "UNCSW", taken: true },
    { name: "Italy", committee: "UNCSW", taken: false },
    { name: "Spain", committee: "UNCSW", taken: false },
    { name: "Russia", committee: "UNCSW", taken: false },
    { name: "China", committee: "UNCSW", taken: false },
    { name: "Japan", committee: "UNCSW", taken: true },
    { name: "South Korea", committee: "UNCSW", taken: true },
    { name: "India", committee: "UNCSW", taken: true },
    { name: "Pakistan", committee: "UNCSW", taken: false },
    { name: "Bangladesh", committee: "UNCSW", taken: false },
    { name: "Australia", committee: "UNCSW", taken: false },
    { name: "New Zealand", committee: "UNCSW", taken: false },
    { name: "South Africa", committee: "UNCSW", taken: false },
    { name: "Nigeria", committee: "UNCSW", taken: false },
    { name: "Kenya", committee: "UNCSW", taken: false },
    { name: "Egypt", committee: "UNCSW", taken: false },
    { name: "Saudi Arabia", committee: "UNCSW", taken: false },
    { name: "Turkey", committee: "UNCSW", taken: false },
    { name: "Iran", committee: "UNCSW", taken: false },
    { name: "Iraq", committee: "UNCSW", taken: false },
    { name: "Indonesia", committee: "UNCSW", taken: false },
    { name: "Philippines", committee: "UNCSW", taken: false },
    { name: "Vietnam", committee: "UNCSW", taken: false },
    { name: "Thailand", committee: "UNCSW", taken: false },
    { name: "Sweden", committee: "UNCSW", taken: true },
    { name: "Norway", committee: "UNCSW", taken: true },
    { name: "Netherlands", committee: "UNCSW", taken: false },
    { name: "Switzerland", committee: "UNCSW", taken: false },

    // HCC Countries
    { name: "Maximillien Robespierre", committee: "HCC", taken: false },
    { name: "Georges Danton", committee: "HCC", taken: false },
    { name: "Abbe Emmanuel-Joseph Sieyes", committee: "HCC", taken: false },
    { name: "Count of Mirabeau", committee: "HCC", taken: false },
    { name: "Marquis de Lefayette", committee: "HCC", taken: true },
    { name: "Jean-Paul Marat ", committee: "HCC", taken: false },
    { name: "Camille Desmoulins", committee: "HCC", taken: false },
    { name: "Madame Olympe de Gouges", committee: "HCC", taken: false },
    { name: "Louis XVI (via Royalist Emissary)", committee: "HCC", taken: false },
    { name: "Cardinal de Brienne", committee: "HCC", taken: false },
    { name: "Bishop Talleyrand", committee: "HCC", taken: false },
    { name: "Duchesse de Polignac", committee: "HCC", taken: false },
    { name: "Moderate Bourgeois Merchant", committee: "HCC", taken: false },
    { name: "Claire Rousseau (Fictional)", committee: "HCC", taken: false },
    { name: "Jacobin Faction Whip", committee: "HCC", taken: false },
    { name: "Huguenot Leader", committee: "HCC", taken: false },

    // IP Countries
    { name: "10 - Journalist", committee: "IP", taken: false },
    { name: "10 - Caricaturis", committee: "IP", taken: false },
    
   
  ])

  // Filter countries based on search term and active filter
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "All" || country.committee === activeFilter
    return matchesSearch && matchesFilter
  })

  // Get counts for each committee
  const getCommitteeCount = (committee: Committee) => {
    return countries.filter((country) => committee === "All" || country.committee === committee).length
  }

  // Get taken counts for each committee
  const getCommitteeTakenCount = (committee: Committee) => {
    return countries.filter((country) => (committee === "All" || country.committee === committee) && country.taken)
      .length
  }

  return (
    <section className="py-16 md:py-20 bg-black" id="countries">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Countries by Committee
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto px-2 text-base sm:text-lg">
            ZENITH MUN offers 85 countries across four committees. Choose your preferred country and committee during
            registration. Countries marked as taken have already been assigned.
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search countries..."
              className="bg-white/5 border-white/20 text-white pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
          </div>

          <div className="flex-shrink-0">
            <Tabs defaultValue="All" className="w-full" onValueChange={(value) => setActiveFilter(value as Committee)}>
              <TabsList className="bg-white/5 border border-white/10 p-1 h-12">
                <TabsTrigger value="All" className="data-[state=active]:bg-purple-500/20">
                  All ({getCommitteeCount("All")})
                </TabsTrigger>
                <TabsTrigger value="UNHRC" className="data-[state=active]:bg-purple-500/20">
                  UNHRC ({getCommitteeCount("UNHRC")})
                </TabsTrigger>
                <TabsTrigger value="UNCSW" className="data-[state=active]:bg-purple-500/20">
                  UNCSW ({getCommitteeCount("UNCSW")})
                </TabsTrigger>
                <TabsTrigger value="HCC" className="data-[state=active]:bg-purple-500/20">
                  HCC ({getCommitteeCount("HCC")})
                </TabsTrigger>
                <TabsTrigger value="IP" className="data-[state=active]:bg-purple-500/20">
                  IP ({getCommitteeCount("IP")})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Committee Cards */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {(activeFilter === "All" ? ["UNHRC", "UNCSW", "HCC", "IP"] : [activeFilter]).map((committee) => (
            <Card key={committee} className="bg-white/5 border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white text-xl">{committee} Committee</CardTitle>
                  <div className="text-sm text-white/70">
                    <span className="text-purple-400 font-medium">
                      {getCommitteeTakenCount(committee as Committee)}/{getCommitteeCount(committee as Committee)}
                    </span>{" "}
                    countries assigned
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {filteredCountries
                    .filter((country) => country.committee === committee)
                    .map((country, index) => (
                      <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.02}s` }}>
                        <Card
                          className={`border-none transition-all duration-300 h-full ${
                            country.taken
                              ? "bg-purple-900/20 hover:bg-purple-900/30"
                              : "bg-white/5 hover:bg-white/10 hover-scale"
                          }`}
                        >
                          <CardContent className="p-3 sm:p-4 flex items-center justify-between h-full">
                            <p
                              className={`${country.taken ? "text-purple-300/80" : "text-white/80"} text-sm sm:text-base`}
                            >
                              {country.name}
                            </p>
                            {country.taken && (
                              <div className="flex items-center">
                                <span className="text-xs text-purple-300/80 mr-1">Taken</span>
                                <Check size={14} className="text-purple-400" />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                </div>

                {filteredCountries.filter((country) => country.committee === committee).length === 0 && (
                  <p className="text-white/60 text-center py-8">
                    No countries found matching your search in this committee.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <p className="text-white/60 text-center mt-8">No countries found matching your search.</p>
        )}

        <div className="mt-10 bg-white/5 p-6 rounded-xl animate-fade-in">
          <h3 className="text-xl font-semibold text-white mb-4">Country Selection</h3>
          <p className="text-white/80 mb-4">
            When you register, you'll be asked to provide your top 3 country preferences and preferred committee. We'll
            do our best to accommodate your choices, but countries are assigned on a first-come, first-served basis.
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
