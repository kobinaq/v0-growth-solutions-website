import Link from "next/link"
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react"
import coDesign from "@/content/services/co-design-workshops.json"
import capacity from "@/content/services/capacity-building.json"
import monitoring from "@/content/services/monitoring-evaluation.json"
import Card from "@/components/card"

const services = [coDesign, capacity, monitoring]

const serviceIcons = {
  "co-design-workshops": <Users className="w-12 h-12" />,
  "capacity-building": <TrendingUp className="w-12 h-12" />,
  "monitoring-evaluation": <Sparkles className="w-12 h-12" />,
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Redesigned with split layout */}
      <section className="relative min-h-[70vh] flex items-center px-6 py-20 lg:py-32 bg-gradient-to-br from-[#056f39] via-[#044d28] to-[#056f39] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#b3e88a]/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#b3e88a]/5 rounded-full blur-2xl animate-float"></div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl animate-slide-in-up">
            <div className="inline-block mb-6 px-4 py-2 bg-[#b3e88a]/20 backdrop-blur-sm rounded-full border border-[#b3e88a]/30">
              <span className="text-[#b3e88a] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
              Services that
              <br />
              <span className="bg-gradient-to-r from-white via-[#b3e88a] to-white bg-clip-text text-transparent">
                build capacity
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mb-10 leading-relaxed animate-slide-in-up delay-200">
              From participatory planning to organizational development, we provide the tools and expertise communities
              need to thrive.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in-up delay-300">
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e88a] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/about#contact"
                className="group inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section id="services" className="py-24 px-6 bg-gradient-to-br from-[#e1eddf] to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23056f39' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#281f1f] mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-[#281f1f]/70 max-w-3xl mx-auto">
              Tailored services designed to empower communities and drive sustainable impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.slug}
                title={service.title}
                description={service.summary}
                icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
                tags={service.focusAreas.slice(0, 2)}
                className="animate-fade-in-scale"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start animate-slide-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Icon/Visual Column */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="sticky top-24">
                    <div className="bg-gradient-to-br from-[#056f39] to-[#044d28] rounded-2xl p-12 text-white shadow-2xl">
                      <div className="mb-6 text-[#b3e88a]">
                        {serviceIcons[service.slug as keyof typeof serviceIcons]}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{service.title}</h2>
                      <p className="text-white/90 text-lg leading-relaxed">{service.summary}</p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {service.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium border border-white/30"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {/* Body Content */}
                  <div
                    className="prose prose-lg max-w-none text-[#281f1f]/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.body }}
                  />

                  {/* Capabilities */}
                  <div className="bg-[#e1eddf] rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-[#281f1f]">What We Offer</h3>
                    <ul className="space-y-4">
                      {service.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#056f39] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <span className="text-[#281f1f] leading-relaxed group-hover:text-[#056f39] transition-colors duration-300">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      href="/about#contact"
                      className="group inline-flex items-center gap-2 bg-[#056f39] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#044d28] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {service.contactCTAOverride || "Learn More"}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#281f1f] via-[#1a1515] to-[#281f1f] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#056f39]/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#b3e88a]/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm20 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#056f39]/20 backdrop-blur-sm rounded-full border border-[#056f39]/30 animate-fade-in-scale">
            <span className="text-[#b3e88a] font-semibold text-sm uppercase tracking-wider">Let's Work Together</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in-up">
            Ready to get started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed animate-slide-in-up delay-200">
            Let's discuss how our services can support your community development goals and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up delay-300">
            <Link
              href="/about#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#056f39] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#044d28] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-3 gap-8 animate-fade-in-scale delay-500">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#b3e88a] mb-2">50+</div>
              <div className="text-white/70">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#b3e88a] mb-2">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#b3e88a] mb-2">100%</div>
              <div className="text-white/70">Community-Led</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
