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
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#056f39]/90 to-[#044d28]/90 text-white"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-bg.png')", // <-- put your image file in /public/hero-bg.jpg
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#056f39]/80 to-[#044d28]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            {homeData.hero.h1}
          </h1>
          <p className="text-xl md:text-2xl text-[#b3e88a] max-w-3xl mx-auto mb-12 leading-relaxed">
            {homeData.hero.subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={homeData.hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e88a] transition-colors"
            >
              {homeData.hero.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={homeData.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {homeData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-24 px-6 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {homeData.valueCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl text-[#056f39] mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-[#281f1f] mb-4">{card.title}</h3>
                <p className="text-[#281f1f]/70 leading-relaxed">{card.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#281f1f] mb-16 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-[#b3e88a] mb-4">
                  {step.number.toString().padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold text-[#281f1f] mb-3">{step.title}</h3>
                <p className="text-[#281f1f]/70 leading-relaxed">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 px-6 bg-[#056f39] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeData.focusAreas.map((area) => (
              <div
                key={area.slug}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-white/80 leading-relaxed">{area.short}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e88a] transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#281f1f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to create sustainable change?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let's co-design solutions that empower your community.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 bg-[#056f39] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#044d28] transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
