import Link from "next/link"
import { ArrowRight } from "lucide-react"
import homeData from "@/content/home.json"
import siteData from "@/content/site.json"

export const metadata = {
  title: `${siteData.siteTitle} - Community-led sustainable development`,
  description: siteData.metaDescription,
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Care.org Style */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#056f39]/95 via-[#056f39]/85 to-[#056f39]/75" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              {homeData.hero.h1}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed opacity-95 animate-fade-in-up delay-200">
              {homeData.hero.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                href={homeData.hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded font-bold text-lg hover:bg-[#b3e88a] hover:text-[#056f39] transition-all duration-300 shadow-lg"
              >
                {homeData.hero.primaryCta.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={homeData.hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#056f39] transition-all duration-300"
              >
                {homeData.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards - Care.org Style */}
      <section className="py-20 px-6 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {homeData.valueCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl mb-6 text-[#056f39]">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#281f1f] mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-[#281f1f]/80 leading-relaxed">
                  {card.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Care.org Style */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#281f1f] mb-16 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-[#b3e88a] mb-4">
                  {step.number.toString().padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-[#281f1f] mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-[#281f1f]/80 leading-relaxed">
                  {step.summary}
                </p>
                {/* Connection line */}
                {index < homeData.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-[#b3e88a]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - Care.org Style */}
      <section className="py-24 px-6 bg-[#056f39] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Our Focus Areas
          </h2>
          <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto">
            Building sustainable futures together through community-led initiatives
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeData.focusAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group p-8 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#b3e88a] transition-colors">
                  {area.title}
                </h3>
                <p className="text-base text-white/85 leading-relaxed">
                  {area.short}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded font-bold text-lg hover:bg-[#b3e88a] transition-all duration-300 shadow-lg"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Care.org Style */}
      <section className="py-24 px-6 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-md animate-fade-in-up">
              <div className="text-6xl font-bold mb-4 text-[#056f39]">50+</div>
              <div className="text-xl font-semibold text-[#281f1f]">Communities Served</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-200">
              <div className="text-6xl font-bold mb-4 text-[#056f39]">15+</div>
              <div className="text-xl font-semibold text-[#281f1f]">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-400">
              <div className="text-6xl font-bold mb-4 text-[#056f39]">100%</div>
              <div className="text-xl font-semibold text-[#281f1f]">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Care.org Style */}
      <section className="py-24 px-6 bg-[#281f1f] text-white relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to create sustainable change?
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's co-design solutions that empower your community.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 bg-[#056f39] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#b3e88a] hover:text-[#056f39] transition-all duration-300 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
