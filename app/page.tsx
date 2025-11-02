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
      {/* Hero Section - Tribe Style */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gradient-to-br from-[#056f39] to-[#044d28]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white py-20 pb-32 md:pb-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {homeData.hero.h1}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {homeData.hero.subhead}
            </p>
            <Link
              href={homeData.hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-white text-[#056f39] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
            >
              {homeData.hero.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V150H1380C1320 150 1200 150 1080 150C960 150 840 150 720 150C600 150 480 150 360 150C240 150 120 150 60 150H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Who We Are Section - Tribe Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#056f39] font-semibold text-sm uppercase tracking-wide">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mt-2 mb-6">Building Capacity, Empowering Communities</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Growth Solutions is a community development consultancy firm focused on sustainable solutions through participatory planning and capacity building across Ghana.
              </p>
              <div className="bg-[#056f39]/10 border-l-4 border-[#056f39] p-4 mb-6">
                <p className="text-gray-700 italic">
                  "We believe in co-designing solutions that truly empower communities to thrive."
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#056f39] text-white hover:bg-[#044d28] font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {homeData.valueCards.map((card, index) => {
                const colors = [
                  { bg: 'bg-[#056f39]/10', text: 'text-[#056f39]' },
                  { bg: 'bg-[#b3e88a]/30', text: 'text-[#044d28]' },
                  { bg: 'bg-blue-100', text: 'text-blue-600' },
                  { bg: 'bg-yellow-100', text: 'text-yellow-600' }
                ];
                const color = colors[index % colors.length];
                return (
                  <div key={index} className={`${color.bg} p-6 rounded-lg`}>
                    <div className={`${color.text} text-4xl mb-3`}>
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-[#281f1f]">{card.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{card.excerpt.substring(0, 50)}...</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Tribe Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-[#056f39] font-semibold text-sm uppercase tracking-wide">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mt-2 mb-12">Making a Difference Across Ghana</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-[#056f39] mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Communities Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-[#056f39] mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-[#056f39] mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Community-Led</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-[#056f39] mb-2">
                30+
              </div>
              <div className="text-gray-600 font-medium">Active Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Tribe Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-[#056f39] font-semibold text-sm uppercase tracking-wide">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mt-2">How We Work</h2>
            <p className="text-gray-600 mx-auto mt-4 max-w-2xl">
              Our proven methodology ensures sustainable development through participatory planning and community ownership
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.processSteps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#056f39] text-white rounded-full text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#281f1f] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section - Tribe Style */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-[#056f39] font-semibold text-sm uppercase tracking-wide">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mt-2">Focus Areas</h2>
            <p className="text-gray-600 mx-auto mt-4 max-w-2xl">
              Discover the transformative work we're doing across communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.focusAreas.slice(0, 6).map((area, index) => (
              <div
                key={area.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#056f39] uppercase">{area.title}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-[#281f1f]">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.short}</p>
                  <Link
                    href="/projects"
                    className="text-[#056f39] hover:text-[#044d28] font-semibold inline-flex items-center gap-2"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-white border-2 border-[#056f39] text-[#056f39] hover:bg-[#056f39] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section - Tribe Style */}
      <section className="py-16 bg-gradient-to-r from-[#056f39] to-[#044d28] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to create sustainable change?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's co-design solutions that empower your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about#contact" className="bg-white text-[#056f39] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#056f39] font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
