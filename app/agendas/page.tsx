import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Committee Agendas - ZENITH MUN",
  description: "Explore the agendas for all committees at ZENITH Model United Nations Conference",
}

export default function AgendasPage() {
  // Committee data with agendas
  const committees = [
    {
      name: "United Nations Human Rights Council",
      shortName: "UNHRC",
      type: "Specialized Agency",
      level: "Beginner",
      levelColor: "text-green-400 bg-green-500/20",
      agendas: [
        {
          title: "Addressing Human Rights Violations in Conflict Zones",
          description:
            "This agenda item focuses on the protection of civilians in areas of armed conflict, with special attention to vulnerable populations including women, children, and minorities. Delegates will discuss mechanisms for monitoring, reporting, and addressing human rights violations in conflict zones, as well as strategies for holding perpetrators accountable.",
        },
        {
          title: "Digital Rights and Privacy in the Age of Surveillance",
          description:
            "As technology advances, questions about digital privacy, surveillance, and freedom of expression online have become increasingly important. This agenda item explores the balance between security concerns and individual rights in the digital sphere, addressing issues such as government surveillance, data protection, and censorship.",
        },
      ],
    },
    {
      name: "UN Commission on the Status of Women",
      shortName: "UNCSW",
      type: "Specialized Agency",
      level: "Intermediate",
      levelColor: "text-yellow-400 bg-yellow-500/20",
      agendas: [
        {
          title: "Women's Economic Empowerment in the Changing World of Work",
          description:
            "This agenda examines the structural barriers that women face in the labor market, including wage gaps, occupational segregation, and unpaid care work. Delegates will discuss policies and initiatives to promote women's economic empowerment, entrepreneurship, and equal participation in the workforce.",
        },
        {
          title: "Eliminating Violence Against Women and Girls",
          description:
            "Violence against women and girls remains one of the most widespread human rights violations. This agenda item addresses various forms of gender-based violence, including domestic violence, sexual harassment, and harmful practices. Delegates will work on comprehensive approaches to prevention, protection, and support services.",
        },
      ],
    },
    {
      name: "Historical Crisis Committee",
      shortName: "HCC",
      type: "Crisis Committee",
      level: "Advanced",
      levelColor: "text-red-400 bg-red-500/20",
      agendas: [
        {
          title: "The Cuban Missile Crisis, 1962",
          description:
            "Delegates will be transported back to October 1962, at the height of the Cold War, when the United States discovered Soviet nuclear missiles in Cuba. As members of either the US Executive Committee or the Soviet Presidium, delegates will navigate this tense standoff that brought the world to the brink of nuclear war. The committee will explore alternative historical outcomes based on delegates' decisions.",
        },
      ],
    },
    {
      name: "International Press",
      shortName: "IP",
      type: "Specialized Committee",
      level: "Intermediate",
      levelColor: "text-yellow-400 bg-yellow-500/20",
      agendas: [
        {
          title: "Conference Coverage and Reporting",
          description:
            "IP delegates will be assigned to cover specific committees, conducting interviews with delegates and chairs, writing articles, and producing multimedia content. They will report on key debates, resolutions, and behind-the-scenes developments throughout the conference.",
        },
        {
          title: "Digital Media Production",
          description:
            "In addition to written reporting, IP delegates will create digital content including photography, social media posts, and video interviews. This agenda focuses on presenting MUN proceedings in engaging, accessible formats for the wider delegate body.",
        },
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-8">
            <Link href="/#committees" className="inline-flex items-center text-white/70 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Committees
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Committee Agendas
            </h1>
            <p className="text-white/80 max-w-3xl">
              Explore the agendas for all committees at ZENITH MUN. Each committee has carefully selected topics that
              reflect current global challenges and provide opportunities for meaningful debate and resolution drafting.
            </p>
          </div>

          <div className="space-y-10">
            {committees.map((committee, index) => (
              <section key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="bg-white/5 border-none overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full inline-block ${committee.levelColor}`}
                      >
                        {committee.level}
                      </span>
                      <span className="text-sm text-white/70">{committee.type}</span>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-white">{committee.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Agenda Items</h3>
                    <div className="space-y-6">
                      {committee.agendas.map((agenda, agendaIndex) => (
                        <div key={agendaIndex} className="bg-white/5 p-4 rounded-lg">
                          <h4 className="text-base font-medium text-purple-400 mb-2">
                            {agendaIndex + 1}. {agenda.title}
                          </h4>
                          <p className="text-white/70 text-sm">{agenda.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdmPCZRxxB6WtuwFfbBXHLtRtOGxt2GwsM7YDM-_es_Z5BgmA/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register for {committee.shortName}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
