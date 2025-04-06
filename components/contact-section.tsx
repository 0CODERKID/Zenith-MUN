"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Globe, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-12 md:py-20 bg-black" id="contact">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Contact Us
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto px-2 text-base sm:text-lg">
            Have questions about ZENITH MUN? Our team is here to help. Reach out to us through any of the channels
            below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-5 animate-fade-in">
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300 shadow-lg shadow-purple-900/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Get In Touch</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-base">Email</h4>
                    <p className="text-white/70 text-sm">contactofficial.zenith@gmail.com</p>
                    
                  </div>
                </div>

                

                <div className="flex items-start gap-3 sm:gap-4">
                  <Globe className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-base">Social Media</h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <a href="https://x.com/Zenith_Group_?t=_SIu3uMjXsAujTvFZIoqFw&s=09" className="text-white/70 hover:text-purple-400 transition-colors text-sm py-1">
                        Twitter
                      </a>
                      <a href="https://www.instagram.com/zenith_.group/" className="text-white/70 hover:text-purple-400 transition-colors text-sm py-1">
                        Instagram
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300 shadow-lg shadow-purple-900/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Online Conference</h3>
              <p className="text-white/70 text-sm sm:text-base">
                ZENITH MUN is a fully online conference, making it accessible to delegates from around the world. No
                travel or accommodation required - participate from the comfort of your home!
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300 shadow-lg shadow-purple-900/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Send Us a Message</h3>

              <form className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="first-name" className="text-white text-sm">
                      First Name
                    </Label>
                    <Input id="first-name" className="bg-white/10 border-white/20 text-white h-12" />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="last-name" className="text-white text-sm">
                      Last Name
                    </Label>
                    <Input id="last-name" className="bg-white/10 border-white/20 text-white h-12" />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-white text-sm">
                    Email
                  </Label>
                  <Input id="email" type="email" className="bg-white/10 border-white/20 text-white h-12" />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="inquiry-type" className="text-white text-sm">
                    Inquiry Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="registration">Registration</SelectItem>
                      <SelectItem value="committees">Committees</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="message" className="text-white text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="bg-white/10 border-white/20 text-white resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white h-12 mt-2"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

