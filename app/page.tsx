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
    <main className="min-h-screen">
      {/* Hero Section - Split Layout with Image Carousel */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-20 lg:py-32 bg-gradient-to-br from-[#e1eddf] to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23056f39' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image Carousel */}
            <div className="order-2 lg:order-1 h-[400px] sm:h-[500px] lg:h-[600px] animate-fade-in-scale">
              <HeroCarousel images={heroImages} interval={5000} />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2 animate-slide-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-[#281f1f]">
                <span className="bg-gradient-to-r from-[#056f39] via-[#044d28] to-[#056f39] bg-clip-text text-transparent">
                  {homeData.hero.h1}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#281f1f]/70 mb-8 lg:mb-10 leading-relaxed animate-slide-in-up delay-200">
                {homeData.hero.subhead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up delay-300">
                <Link
                  href={homeData.hero.primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 bg-[#056f39] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#044d28] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {homeData.hero.primaryCta.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href={homeData.hero.secondaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 border-2 border-[#056f39] text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#056f39]/5 transition-all duration-300 hover:scale-105"
                >
                  {homeData.hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-24 px-6 bg-[#e1eddf] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23056f39' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {homeData.valueCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.excerpt}
                icon={card.icon}
                className="animate-fade-in-scale"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 bg-white relative">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#056f39]/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#281f1f] mb-16 text-center animate-slide-in-up">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.processSteps.map((step, index) => (
              <div key={step.number} className="relative animate-fade-in-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Connecting line for desktop */}
                {index < homeData.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-12 w-full h-0.5 bg-gradient-to-r from-[#b3e88a] to-transparent"></div>
                )}
                
                <div className="text-6xl font-bold text-[#b3e88a] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.number.toString().padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold text-[#281f1f] mb-3 group-hover:text-[#056f39] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#281f1f]/70 leading-relaxed group-hover:text-[#281f1f] transition-colors duration-300">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 px-6 bg-[#056f39] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#b3e88a]/10 rounded-full animate-pulse-glow delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-slide-in-up">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeData.focusAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#b3e88a] transition-colors duration-300">{area.title}</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">{area.short}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-slide-in-up delay-500">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e88a] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#056f39] to-[#044d28] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-scale">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#b3e88a] bg-clip-text text-transparent">50+</div>
              <div className="text-white/80 text-lg">Communities Served</div>
            </div>
            <div className="animate-fade-in-scale delay-200">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#b3e88a] bg-clip-text text-transparent">15+</div>
              <div className="text-white/80 text-lg">Years Experience</div>
            </div>
            <div className="animate-fade-in-scale delay-400">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#b3e88a] bg-clip-text text-transparent">100%</div>
              <div className="text-white/80 text-lg">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#281f1f] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-24 h-24 bg-[#056f39]/10 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#b3e88a]/5 rounded-full animate-pulse-glow delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-up">Ready to create sustainable change?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed animate-slide-in-up delay-200">
            Let's co-design solutions that empower your community.
          </p>
          <Link
            href="/about#contact"
            className="group inline-flex items-center gap-2 bg-[#056f39] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#044d28] transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-in-up delay-300"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  )
}
