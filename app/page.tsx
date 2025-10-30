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
      {/* Hero Section - Apple Style */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-white overflow-hidden"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

        {/* Content */}
        <div className="relative z-10 max-w-[980px] mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-[1.05] tracking-tight text-[#1d1d1f] animate-fade-in-up">
            {homeData.hero.h1}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-12 leading-snug font-normal animate-fade-in-up delay-200">
            {homeData.hero.subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-400">
            <Link
              href={homeData.hero.primaryCta.href}
              className="group inline-flex items-center gap-2 bg-[#056f39] text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-[#044d28] transition-all duration-200"
            >
              {homeData.hero.primaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href={homeData.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 text-[#056f39] text-base font-medium hover:underline transition-all duration-200"
            >
              {homeData.hero.secondaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      {/* Value Cards - Apple Style */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[980px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {homeData.valueCards.map((card, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl mb-5 text-[#056f39]">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  {card.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {card.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Apple Style */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-20 text-center tracking-tight animate-fade-in-up">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {homeData.processSteps.map((step, index) => (
              <div
                key={step.number}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-2xl font-medium text-[#056f39] mb-3">
                  {step.number.toString().padStart(2, "0")}
                </div>
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - Apple Style with Brand Color */}
      <section className="py-28 px-6 bg-[#056f39] text-white">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 text-center tracking-tight animate-fade-in-up">
            Our Focus Areas
          </h2>
          <p className="text-xl md:text-2xl text-[#b3e88a] text-center mb-16 animate-fade-in-up delay-200">
            Building sustainable futures together
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeData.focusAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2.5 text-white">
                  {area.title}
                </h3>
                <p className="text-base text-white/75 leading-relaxed">
                  {area.short}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 animate-fade-in-up delay-600">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-white text-[#056f39] px-7 py-3.5 rounded-full font-medium text-base hover:bg-gray-50 transition-all duration-200"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Apple Style */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[980px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up">
              <div className="text-6xl md:text-7xl font-semibold mb-3 text-[#056f39]">50+</div>
              <div className="text-xl text-gray-600">Communities Served</div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-6xl md:text-7xl font-semibold mb-3 text-[#056f39]">15+</div>
              <div className="text-xl text-gray-600">Years Experience</div>
            </div>
            <div className="animate-fade-in-up delay-400">
              <div className="text-6xl md:text-7xl font-semibold mb-3 text-[#056f39]">100%</div>
              <div className="text-xl text-gray-600">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#1d1d1f] tracking-tight animate-fade-in-up">
            Ready to create sustainable change?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-200">
            Let's co-design solutions that empower your community.
          </p>
          <Link
            href="/about#contact"
            className="group inline-flex items-center gap-2 bg-[#056f39] text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-[#044d28] transition-all duration-200 animate-fade-in-up delay-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </main>
  )
}
