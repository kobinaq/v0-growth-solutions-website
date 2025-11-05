'use client'

import Link from "next/link"
import { ArrowRight, Leaf, Users, Globe, Sparkles, TreePine, Droplets } from "lucide-react"
import { useEffect, useState, useRef } from "react"
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

// Icon mapping for value cards
const iconMap = {
  Leaf,
  Users,
  Globe,
  Sparkles,
  TreePine,
  Droplets
}

// Typewriter effect component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span className="inline-block">
      {displayedText}
      {isTyping && displayedText.length < text.length && (
        <span className="animate-blink">|</span>
      )}
    </span>
  )
}

// 3D Flip Card Component
function FlipCard({ 
  title, 
  description, 
  icon, 
  story, 
  index 
}: { 
  title: string
  description: string
  icon: string
  story?: string
  index: number 
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Leaf

  return (
    <div 
      className="flip-card-container animate-float"
      style={{ 
        animationDelay: `${index * 0.3}s`,
        animationDuration: `${3 + index * 0.5}s`
      }}
    >
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 via-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-conic from-green-400 via-emerald-500 to-green-400 p-0.5 animate-spin-slow">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3 variable-font-hover">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="mt-6 text-sm text-emerald-600 font-medium flex items-center gap-1">
              <span>Read story</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/30 via-green-600/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Community Story
            </h3>
            <p className="text-white/90 leading-relaxed text-sm">
              {story || `In the village of Kwahu, this initiative transformed the lives of over 500 families. What started as a small pilot program has now become a model for sustainable development across the region, proving that community-led solutions create lasting change.`}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-white/80 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Impact verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Variable font weight animation */
        .variable-font-hover {
          transition: font-weight 0.3s ease;
        }
        
        .variable-font-hover:hover {
          font-weight: 900;
        }
        
        /* Typewriter cursor blink */
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        /* Floating animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          75% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Spin slow */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        /* 3D Flip Card Styles */
        .flip-card-container {
          perspective: 1000px;
          height: 320px;
        }
        
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1.5rem;
          padding: 2rem;
          overflow: hidden;
        }
        
        .flip-card-front {
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border: 1px solid rgba(16, 185, 129, 0.1);
          box-shadow: 0 10px 40px -10px rgba(16, 185, 129, 0.2);
        }
        
        .flip-card-back {
          background: linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%);
          transform: rotateY(180deg);
          color: white;
          box-shadow: 0 10px 40px -10px rgba(6, 95, 70, 0.4);
        }
        
        /* Gradient backgrounds */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
        }
        
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to), var(--tw-gradient-from));
        }
        
        /* Parallax layers */
        .parallax-slow {
          transform: translateY(calc(var(--scrollY) * 0.5px));
        }
        
        .parallax-fast {
          transform: translateY(calc(var(--scrollY) * -0.8px));
        }
        
        /* Video overlay gradient */
        .video-overlay {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }
        
        /* Animated gradient text */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      {/* Immersive Full-Screen Video Hero */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ '--scrollY': scrollY } as React.CSSProperties}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            {/* Fallback to image carousel if video doesn't load */}
            <HeroCarousel images={heroImages} interval={5000} />
          </video>
          <div className="video-overlay absolute inset-0"></div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-conic from-emerald-900/20 via-transparent to-green-900/20 animate-spin-slow"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + i}s`
              }}
            >
              <Leaf className="w-8 h-8 text-green-400/30" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center parallax-slow">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
            <span className="text-white drop-shadow-2xl">
              <TypewriterText text={homeData.hero.h1} delay={300} />
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-light">
            <TypewriterText text={homeData.hero.subhead} delay={1500} />
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href={homeData.hero.primaryCta.href}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">{homeData.hero.primaryCta.label}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            <Link
              href={homeData.hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-3 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-500 hover:scale-110"
            >
              {homeData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 3D Flip Value Cards with Stories */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-white">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-200/20 via-transparent to-transparent"></div>
        </div>

        {/* Animated circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-emerald-300/30 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-green-300/20 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-6 variable-font-hover">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click each card to discover real stories from communities we've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeData.valueCards.map((card, index) => (
              <FlipCard
                key={index}
                title={card.title}
                description={card.excerpt}
                icon={card.icon}
                story={card.story}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps with Enhanced Animation */}
      <section className="py-32 px-6 bg-gradient-to-br from-white via-emerald-50/30 to-green-50 relative overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,300 C360,400 720,200 1440,300 L1440,600 L0,600 Z"
              fill="url(#waveGradient)"
              className="animate-pulse"
            />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-20 text-center variable-font-hover">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {homeData.processSteps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative group animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${4 + index * 0.3}s`
                }}
              >
                {/* Connecting line */}
                {index < homeData.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-24 w-full h-0.5">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 animate-pulse"></div>
                  </div>
                )}
                
                <div className="relative">
                  <div className="text-7xl font-bold mb-6 bg-gradient-to-br from-emerald-400 to-green-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {step.number.toString().padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4 variable-font-hover">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas with Radial Gradient */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Complex gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-600/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-conic from-green-900/30 via-emerald-800/20 to-green-900/30 animate-spin-slow"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${6 + i * 0.5}s`
              }}
            >
              <div className="w-2 h-2 bg-emerald-400/20 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-20 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.focusAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${4 + index * 0.4}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-radial from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 relative z-10 variable-font-hover">
                  {area.title}
                </h3>
                <p className="text-white/80 leading-relaxed relative z-10">
                  {area.short}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-500 hover:scale-110 hover:shadow-2xl"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600"></div>
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/50 via-transparent to-transparent"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <div className="font-serif text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-gradient-text">
                50+
              </div>
              <div className="text-white/90 text-xl font-light">Communities Served</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="font-serif text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-gradient-text">
                15+
              </div>
              <div className="text-white/90 text-xl font-light">Years Experience</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="font-serif text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-gradient-text">
                100%
              </div>
              <div className="text-white/90 text-xl font-light">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Elements */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900"></div>

        {/* Animated orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Ready to create sustainable change?
          </h2>
          <p className="text-2xl text-white/80 mb-12 leading-relaxed font-light">
            Let's co-design solutions that empower your community.
          </p>
          <Link
            href="/about#contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            Get in Touch
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  )
}