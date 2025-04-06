"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, FileText, BadgeIcon as Certificate, Star, Trophy, Users } from "lucide-react"

export default function PerksSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-950/30" id="perks">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Attendee Benefits
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto px-2 text-base sm:text-lg">
            Participating in ZENITH MUN offers valuable credentials and experiences to enhance your academic profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
          {/* Certificate Card */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="bg-gradient-to-br from-purple-900/20 to-black border-none overflow-hidden h-full hover-scale shadow-lg shadow-purple-900/10">
              <CardContent className="p-4 sm:p-8 flex flex-col h-full">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Certificate className="w-7 h-7 sm:w-10 sm:h-10 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Official Certificates
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="text-white font-medium">Participation Certificate</span> - All delegates receive
                      an official certificate verifying their participation in ZENITH MUN.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="text-white font-medium">Award Certificates</span> - Outstanding delegates receive
                      special recognition certificates for Best Delegate, Outstanding Delegate, and Honorable Mention.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="text-white font-medium">Position Paper Awards</span> - Certificates for
                      exceptional position papers submitted before the conference.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-purple-500/10">
                  <p className="text-white/90 text-xs sm:text-sm italic">
                    "Our certificates are designed to highlight your diplomatic skills, research abilities, and public
                    speaking talents—valuable additions to your college applications and résumé."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* LOA Card */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="bg-gradient-to-br from-cyan-900/20 to-black border-none overflow-hidden h-full hover-scale shadow-lg shadow-cyan-900/10">
              <CardContent className="p-4 sm:p-8 flex flex-col h-full">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Award className="w-7 h-7 sm:w-10 sm:h-10 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Letters of Recommendation
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="text-white font-medium">Personalized LOAs</span> - Outstanding delegates are
                      eligible to receive personalized letters of recommendation from our experienced committee chairs.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="text-white font-medium">Leadership Recognition</span> - Letters highlight your
                      leadership qualities, diplomatic skills, and ability to collaborate in an international setting.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="text-white font-medium">College Application Asset</span> - These recommendations
                      can significantly strengthen your college applications and scholarship opportunities.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-cyan-500/10">
                  <p className="text-white/90 text-xs sm:text-sm italic">
                    "Our letters of recommendation detail your specific contributions, skills demonstrated, and
                    achievements during the conference—providing valuable third-party validation of your abilities."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Card className="bg-white/5 border-none overflow-hidden shadow-lg shadow-purple-900/10">
            <CardContent className="p-4 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">How to Qualify</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-purple-400 font-medium">For Certificates:</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-400">1</span>
                      </div>
                      <span>Register and attend all committee sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-400">2</span>
                      </div>
                      <span>Submit your position paper by the deadline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-400">3</span>
                      </div>
                      <span>Actively participate in committee discussions</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-cyan-400 font-medium">For Letters of Recommendation:</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-cyan-400">1</span>
                      </div>
                      <span>Demonstrate exceptional performance in your committee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-cyan-400">2</span>
                      </div>
                      <span>Receive an award (Best Delegate, Outstanding Delegate, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-cyan-400">3</span>
                      </div>
                      <span>Submit a formal request after the conference</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-5 w-full sm:w-auto">
                  Learn More About Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

