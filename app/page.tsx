import Link from "next/link"
import { ArrowRight } from "lucide-react"
import homeData from "@/content/home.json"
import siteData from "@/content/site.json"
import HeroCarousel from "@/components/hero-carousel"
import Card from "@/components/card"

export const metadata = {
  title: `${siteData.siteTitle} - Community-led sustainable development`,
  description: siteData.metaDescription,
}

const heroImages = [
  "/assets/projects/ada-water-1.jpg",
  "/assets/projects/agroforestry-1.jpg",
  "/assets/projects/solar-school-1.jpg",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      {/* Hero Section - Minimalist Centered Layout */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 lg:py-32 overflow-hidden">
        {/* Container */}
        <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-8">
          {/* Profile Image/Visual */}
          <div className="mb-6 inline-block animate-fade-in-scale">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-[#056f39]/20 shadow-sm">
              <HeroCarousel images={heroImages} interval={5000} />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-[#281f1f] animate-slide-in-up">
            {homeData.hero.h1}
          </h1>

          {/* CTA Button */}
          <div className="animate-slide-in-up delay-200">
            <Link
              href={homeData.hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-[#281f1f] text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-[#056f39] transition-all duration-200"
            >
              {homeData.hero.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#281f1f]/40 text-xs animate-bounce">
          Scroll
        </div>
      </section>

      {/* Partner/Trust Strip */}
      <section className="py-12 px-6 bg-white border-y border-[#281f1f]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {/* Add actual partner logos or community names here */}
            <span className="text-xs font-medium tracking-widest text-[#281f1f] uppercase">Communities</span>
            <span className="text-xs font-medium tracking-widest text-[#281f1f] uppercase">Partners</span>
            <span className="text-xs font-medium tracking-widest text-[#281f1f] uppercase">Impact</span>
          </div>
        </div>
      </section>

      {/* Services/Value Section */}
      <section className="py-20 px-6 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#281f1f] mb-4">
            Collaborate with communities and agencies<br />to create impactful results.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.processSteps.map((step, index) => (
              <div key={step.number} className="text-center space-y-3">
                {/* Icon placeholder - replace with actual icons */}
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-lg bg-[#056f39]/10 flex items-center justify-center">
                    <span className="text-[#056f39] font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[#281f1f]">{step.title}</h3>
                <p className="text-sm text-[#281f1f]/60 leading-relaxed">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - Card Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#281f1f] mb-12 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeData.focusAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group bg-[#f5f5f0] p-8 rounded-2xl hover:bg-[#056f39] transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-3 text-[#281f1f] group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-[#281f1f]/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {area.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 px-6 bg-[#f5f5f0] border-y border-[#281f1f]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-semibold mb-2 text-[#056f39]">50+</div>
              <div className="text-[#281f1f]/60 text-sm tracking-wide uppercase">Communities Served</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-semibold mb-2 text-[#056f39]">15+</div>
              <div className="text-[#281f1f]/60 text-sm tracking-wide uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-semibold mb-2 text-[#056f39]">100%</div>
              <div className="text-[#281f1f]/60 text-sm tracking-wide uppercase">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered with Icon */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#056f39]/10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#056f39]" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#281f1f] leading-tight">
            Tell me about your next<br />project
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#281f1f] text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-[#056f39] transition-all duration-200"
            >
              Start Here
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={homeData.hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 border border-[#281f1f]/20 text-[#281f1f] px-7 py-3 rounded-full font-medium text-sm hover:border-[#281f1f]/40 transition-all duration-200"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-6 bg-[#f5f5f0] border-t border-[#281f1f]/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#281f1f]/50">
          <div>© 2024 All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-[#056f39] transition-colors">LinkedIn</Link>
            <Link href="/projects" className="hover:text-[#056f39] transition-colors">Dribbble</Link>
            <Link href="/about#contact" className="hover:text-[#056f39] transition-colors">Instagram</Link>
          </div>
        </div>
      </section>
    </main>
  )
}