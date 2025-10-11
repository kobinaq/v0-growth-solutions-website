import Link from "next/link"
import coDesign from "@/content/services/co-design-workshops.json"
import capacity from "@/content/services/capacity-building.json"
import monitoring from "@/content/services/monitoring-evaluation.json"

const services = [coDesign, capacity, monitoring]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#056f39] text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Services that
            <br />
            build capacity.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-neutral/90">
            From participatory planning to organizational development, we provide the tools and expertise communities
            need to thrive.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-[#056f39]">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <article key={service.slug} className="border-b border-deep/10 pb-20 last:border-0">
                <div className="grid md:grid-cols-12 gap-12">
                  {/* Title Column */}
                  <div className="md:col-span-5">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-deep sticky top-24">
                      {service.title}
                    </h2>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-7 space-y-8">
                    <p className="text-lg text-deep/80 leading-relaxed">{service.summary}</p>

                    <div
                      className="prose prose-lg max-w-none text-deep/70"
                      dangerouslySetInnerHTML={{ __html: service.body }}
                    />

                    {/* Capabilities */}
                    <div>
                      <h3 className="font-display text-xl font-bold mb-4 text-deep">What We Offer</h3>
                      <ul className="space-y-3">
                        {service.capabilities.map((capability, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-green-1 text-lg">✓</span>
                            <span className="text-deep/80">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Focus Areas */}
                    <div className="flex flex-wrap gap-3">
                      {service.focusAreas.map((area) => (
                        <span key={area} className="px-4 py-2 bg-green-1/10 text-green-1 text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#281f1f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to get started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Let's discuss how our services can support your community development goals.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-[#056f39] text-white px-12 py-4 text-lg font-bold hover:bg-neutral transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
