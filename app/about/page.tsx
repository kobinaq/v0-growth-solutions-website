import aboutData from "@/content/about.json"
import sarahData from "@/content/team/sarah-naa-dedei.json"
import maxwellData from "@/content/team/maxwell-bentil.json"

const teamMembers = [sarahData, maxwellData]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#056f39] text-white py-24 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#b3e88a]/10 rounded-full animate-pulse-glow delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse-glow delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight animate-slide-in-up">
            <span className="bg-gradient-to-r from-white via-white to-[#b3e88a] bg-clip-text text-transparent">
              Building capacity.
              <br />
              Empowering communities.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-neutral/90 animate-slide-in-up delay-200">
            {aboutData.mission}
          </p>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-deep">Our Ethos</h2>
              <p className="text-lg leading-relaxed text-deep/80">{aboutData.ethos}</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 text-deep">Guiding Principles</h3>
              <ul className="space-y-4">
                {aboutData.guidingPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white/90 bg-green-1 rounded-full w-7 h-7 flex items-center justify-center text-sm">
                      →
                    </span>
                    <span className="text-deep/80">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-deep">Our Approach</h2>
          <p className="text-lg leading-relaxed text-deep/80 max-w-4xl">{aboutData.approach}</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-[#056f39] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#b3e88a]/10 rounded-full animate-pulse-glow delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 animate-slide-in-up">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group animate-fade-in-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-square bg-white/5 mb-6 overflow-hidden rounded-2xl group-hover:shadow-xl transition-all duration-500">
                    <img 
                      src={member.headshotPath || "/placeholder.svg"} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                      />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-white group-hover:text-[#b3e88a] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/90 font-medium mb-4 group-hover:text-white transition-colors duration-300">
                  {member.role}
                </p>
                <p className="text-white/85 text-sm leading-relaxed mb-4 group-hover:text-white/95 transition-colors duration-300">
                  {member.bio}
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="group/link inline-block text-white/95 hover:text-white transition-colors text-sm font-medium"
                  >
                    Contact 
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300 inline-block ml-1">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-deep text-center">
            Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {aboutData.partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4"
              >
                {partner.logoPath ? (
                  <img
                    src={partner.logoPath}
                    alt={partner.name}
                    className="w-28 h-auto object-contain mb-2"
                  />
                ) : (
                  <span className="text-deep/40 text-sm font-medium text-center">
                    {partner.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 md:py-28 bg-[#281f1f] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Let us work together</h2>
              <p className="text-xl opacity-90">
                Ready to create meaningful change in your community? Get in touch with us.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Your organization (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-white text-black px-12 py-4 text-lg font-bold hover:bg-neutral transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
