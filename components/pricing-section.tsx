"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingTierProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

function PricingTier({ name, price, description, features, highlighted = false }: PricingTierProps) {
  return (
    <Card
      className={`border-none ${highlighted ? "bg-gradient-to-b from-purple-600/20 to-cyan-600/20 shadow-lg shadow-purple-500/10" : "bg-white/5"}`}
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{name}</CardTitle>
        <div className="mt-4 flex items-baseline text-white">
          <span className="text-4xl font-extrabold tracking-tight">{price}</span>
          <span className="ml-1 text-xl font-semibold text-white/70">/delegate</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/70 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 shrink-0" />
              <span className="text-sm text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${highlighted ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
        >
          Register Now
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "FREE",
      price: "$0",
      description: "Register now for our completely free online MUN experience!",
      features: [
        "Access to all committees",
        "Conference materials",
        "Certificate of participation",
        "Opening and closing ceremonies",
        "Online social events",
      ],
    },
    {
      name: "FREE",
      price: "$0",
      description: "Our online MUN is 100% free for all participants.",
      features: [
        "Access to all committees",
        "Conference materials",
        "Certificate of participation",
        "Opening and closing ceremonies",
        "Online social events",
        "Video conferencing support",
      ],
      highlighted: true,
    },
    {
      name: "FREE",
      price: "$0",
      description: "Zero cost for schools and individual participants.",
      features: [
        "Access to all committees",
        "Conference materials",
        "Certificate of participation",
        "Opening and closing ceremonies",
        "Online social events",
        "Dedicated faculty advisor support",
      ],
    },
  ]

  return (
    <section className="py-20 bg-black" id="pricing">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-in text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Registration & Pricing
          </h2>
          <p className="animate-fade-in text-white/80 max-w-2xl mx-auto">
            ZENITH MUN is completely <span className="text-purple-400 font-semibold">FREE</span> for all participants.
            We believe in making diplomatic education accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <PricingTier {...tier} />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 rounded-xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-xl font-semibold text-white mb-4">Registration Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-400 font-medium mb-2">Registration Deadlines</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Early Registration: September 15, 2023</li>
                <li>Regular Registration: October 30, 2023</li>
                <li>Late Registration: November 15, 2023</li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-medium mb-2">What's Included</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Full access to online committee sessions</li>
                <li>Digital conference materials</li>
                <li>Certificate of participation (digital)</li>
                <li>Virtual social events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

