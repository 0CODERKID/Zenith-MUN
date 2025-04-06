"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What is Model United Nations?",
      answer:
        "Model United Nations (MUN) is an educational simulation where students roleplay as delegates representing different countries in various UN committees. Participants research, debate, and develop solutions to global issues following UN procedures and protocols.",
    },
    {
      question: "How much does it cost to participate in ZENITH MUN?",
      answer:
        "ZENITH MUN is completely FREE for all participants. We believe in making diplomatic education accessible to everyone, which is why we've removed financial barriers to participation.",
    },
    {
      question: "How will the online conference work?",
      answer:
        "The conference will be held on a virtual platform that allows for real-time debate, document sharing, and voting. We'll provide comprehensive technical training before the conference to ensure all delegates are comfortable with the platform.",
    },
    {
      question: "Who can participate in ZENITH MUN?",
      answer:
        "ZENITH MUN is open to high school and university students from around the world. We welcome delegates of all experience levels, from beginners to seasoned MUN participants.",
    },
    {
      question: "Do I need prior MUN experience to participate?",
      answer:
        "No, prior experience is not required. We offer committees suitable for beginners and provide training materials to help new delegates prepare. We also host a pre-conference workshop for first-time participants.",
    },
    {
      question: "How are country assignments determined?",
      answer:
        "Country assignments are based on preferences indicated during registration. We try to accommodate preferences but cannot guarantee specific country assignments.",
    },
    {
      question: "Are there any awards or recognitions?",
      answer:
        "Yes, we recognize exceptional performance with awards such as Best Delegate, Outstanding Delegate, Honorable Mention, and Best Position Paper for each committee.",
    },
    {
      question: "What should I prepare before the conference?",
      answer:
        "Delegates should research their assigned country and committee topics, prepare a position paper, and familiarize themselves with the rules of procedure. We'll provide research guides and resources to help you prepare.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/30" id="faq">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about ZENITH MUN. If you don't see your question here, feel free to contact
            us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionItem value={`item-${index}`} className="border border-white/10 rounded-lg bg-white/5 px-6">
                  <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

