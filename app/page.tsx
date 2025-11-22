import Link from "next/link"
import { ArrowRight, Users, Target, Lightbulb, TrendingUp } from "lucide-react"
import homeData from "@/content/home.json"
import siteData from "@/content/site.json"

export const metadata = {
  title: `${siteData.siteTitle} - Community-led sustainable development`,
  description: siteData.metaDescription,
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50" id="main">
      {/* Hero Section - Minimalist Centered */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Small Avatar/Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-[#056f39] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for projects</span>
          </div>

          {/* Massive Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#111111] mb-8 leading-[0.95] tracking-tighter">
            {homeData.hero.h1}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {homeData.hero.subhead}
          </p>

          {/* CTA Button */}
          <Link
            href={homeData.hero.primaryCta.href}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {homeData.hero.primaryCta.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid - 3 Column Minimal */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-3 tracking-tight">Focus Areas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {homeData.valueCards.slice(0, 3).map((card, index) => {
              const icons = [Users, Target, Lightbulb];
              const Icon = icons[index] || TrendingUp;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-[2.5rem] p-8 hover:border-gray-300 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#111111]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.excerpt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach - Numbered Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-3 tracking-tight">Our Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.processSteps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3 tracking-tight">
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

      {/* Focus Areas - Bento Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-3 tracking-tight">Project Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeData.focusAreas.slice(0, 6).map((area, index) => (
              <Link
                key={area.slug}
                href="/projects"
                className="group bg-white border border-gray-200 rounded-[2.5rem] p-8 hover:border-black transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {area.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3 tracking-tight group-hover:text-[#056f39] transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.short}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-200"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Clean Minimal */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#111111] mb-3 tracking-tighter">
                50+
              </div>
              <div className="text-gray-600 font-medium">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#111111] mb-3 tracking-tighter">
                15+
              </div>
              <div className="text-gray-600 font-medium">Years</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#111111] mb-3 tracking-tighter">
                100%
              </div>
              <div className="text-gray-600 font-medium">Community-Led</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#111111] mb-3 tracking-tighter">
                30+
              </div>
              <div className="text-gray-600 font-medium">Active Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Large Super Ellipse */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#056f39] rounded-[3rem] p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">
              Let's work together
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to create sustainable change in your community? Let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 bg-white text-[#056f39] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#056f39] transition-all duration-200"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
