import Link from "next/link"
import { ArrowRight } from "lucide-react"
import homeData from "@/content/home.json"
import siteData from "@/content/site.json"
import HeroCarousel from "@/components/hero-carousel"

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
    <main className="min-h-screen bg-background">
      {/* Hero Section - Elegant & Minimal */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 lg:py-40 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-12">
          {/* Profile Image/Visual - More subtle */}
          <div className="mb-8 inline-block animate-fade-in-scale">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border border-border bg-muted/30 shadow-sm">
              <HeroCarousel images={heroImages} interval={6000} />
            </div>
          </div>

          {/* Headline - Refined typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground animate-slide-in-up">
            {homeData.hero.h1}
          </h1>

          {/* CTA Button - More minimal */}
          <div className="animate-slide-in-up delay-200">
            <Link
              href={homeData.hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              {homeData.hero.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - More subtle */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/30 text-[10px] tracking-widest uppercase animate-bounce">
          Scroll
        </div>
      </section>

      {/* Partner/Trust Strip - Clean & Minimal */}
      <section className="py-16 px-6 bg-background border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24 opacity-40 grayscale">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-foreground uppercase">Communities</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-foreground uppercase">Partners</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-foreground uppercase">Impact</span>
          </div>
        </div>
      </section>

      {/* Services/Value Section - Better spacing */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Collaborate with communities and agencies<br className="hidden md:block" /> to create impactful results.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in sustainable development through community-led initiatives and strategic partnerships.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {homeData.processSteps.map((step, index) => (
              <div key={step.number} className="space-y-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="text-primary font-semibold text-xs">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - Refined Card Grid */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our Focus Areas
              </h2>
              <p className="text-muted-foreground">
                Dedicated to addressing the most pressing challenges through innovative and local solutions.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.focusAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group bg-muted/30 p-10 rounded-3xl hover:bg-primary transition-all duration-500 cursor-pointer border border-border/50 hover:border-transparent"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary-foreground transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
                  {area.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Sophisticated Minimalist */}
      <section className="py-32 px-6 bg-muted/10 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-semibold text-primary tracking-tighter">50+</div>
              <div className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">Communities Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-semibold text-primary tracking-tighter">15+</div>
              <div className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-semibold text-primary tracking-tighter">100%</div>
              <div className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal & Focused */}
      <section className="py-40 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 mb-4">
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight">
            Tell me about your next<br className="hidden md:block" /> project
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              Start Here
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={homeData.hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:bg-muted/50 transition-all duration-300"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note - Clean & Subtle */}
      <section className="py-12 px-6 bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 text-[11px] font-medium tracking-wider text-muted-foreground/60 uppercase">
          <div>© 2024 All rights reserved.</div>
          <div className="flex gap-10">
            <Link href="/about" className="hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Dribbble</Link>
            <Link href="/about#contact" className="hover:text-primary transition-colors">Instagram</Link>
          </div>
        </div>
      </section>
    </main>
  )
}