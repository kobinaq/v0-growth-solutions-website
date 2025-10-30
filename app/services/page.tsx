import Link from "next/link"
import { ArrowRight } from "lucide-react"
import coDesign from "@/content/services/co-design-workshops.json"
import capacity from "@/content/services/capacity-building.json"
import monitoring from "@/content/services/monitoring-evaluation.json"

const services = [coDesign, capacity, monitoring]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#056f39] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            Services that build capacity
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-95">
            From participatory planning to organizational development, we provide the tools and expertise communities
            need to thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`${index % 2 === 0 ? "" : "bg-[#e1eddf]"} p-8 md:p-12 rounded-lg`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Title and Summary */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#281f1f]/80 leading-relaxed mb-8">{service.summary}</p>

                    {/* Body content */}
                    <div
                      className="prose prose-lg max-w-none text-[#281f1f]/70 mb-8"
                      dangerouslySetInnerHTML={{ __html: service.body }}
                    />

                    {/* Focus Areas Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-4 py-2 bg-[#056f39] text-white text-sm font-medium rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-6 text-[#281f1f]">What We Offer</h3>
                    <ul className="space-y-4">
                      {service.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#056f39] text-xl font-bold flex-shrink-0">✓</span>
                          <span className="text-[#281f1f]/80 leading-relaxed">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#281f1f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Let's discuss how our services can support your community development goals.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 bg-[#056f39] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#b3e88a] hover:text-[#056f39] transition-all duration-300 shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
