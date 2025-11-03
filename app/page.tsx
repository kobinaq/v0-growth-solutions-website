import Link from "next/link"
import { ArrowRight } from "lucide-react"
import homeData from "@/content/home.json"
import siteData from "@/content/site.json"
import projectsData from "@/content/projects/all-projects.json"

export const metadata = {
  title: `${siteData.siteTitle} - Community-led sustainable development`,
  description: siteData.metaDescription,
}

export default function HomePage() {
  const featuredProject = projectsData[0]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#056f39]/90 to-[#044d28]/90 text-white overflow-hidden"
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

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#b3e88a]/10 rounded-full animate-pulse-glow delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse-glow delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#b3e88a]/5 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-float delay-700"></div>
        </div>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#056f39]/80 to-[#044d28]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight animate-slide-in-up">
            <span className="bg-gradient-to-r from-white via-white to-[#b3e88a] bg-clip-text text-transparent">
              {homeData.hero.h1}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#b3e88a] max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-in-up delay-200">
            {homeData.hero.subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up delay-300">
            <Link
              href={homeData.hero.primaryCta.href}
              className="group inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e88a] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {homeData.hero.primaryCta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href={homeData.hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {homeData.hero.secondaryCta.label}
            </Link>
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
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {homeData.valueCards.map((card, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl text-[#056f39] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#281f1f] mb-4 group-hover:text-[#056f39] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-[#281f1f]/70 leading-relaxed group-hover:text-[#281f1f] transition-colors duration-300">
                  {card.excerpt}
                </p>
              </div>
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

      {/* Featured Project */}
      <section className="py-24 px-6 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#281f1f] mb-16 text-center">Featured Project</h2>
          <article className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div>
                <div className="aspect-[4/3] bg-[#281f1f]/10 overflow-hidden rounded-xl">
                  <img
                    src={featuredProject.gallery?.[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-[#056f39] font-medium mb-4">
                  {featuredProject.focusArea} • {featuredProject.location}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#281f1f]">
                  {featuredProject.title}
                </h3>
                <p className="text-lg text-[#281f1f]/80 mb-6 leading-relaxed">
                  {featuredProject.challenge}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {featuredProject.metrics?.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-display text-3xl font-bold text-[#056f39] mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-[#281f1f]/70">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 text-[#056f39] font-bold hover:gap-4 transition-all"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </article>
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
