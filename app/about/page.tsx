import aboutData from "@/content/about.json"
import sarahData from "@/content/team/sarah-naa-dedei.json"
import kwameData from "@/content/team/kwame-mensah.json"
import amaData from "@/content/team/ama-osei.json"

const teamMembers = [sarahData, kwameData, amaData]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-deep text-neutral py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Building capacity.
            <br />
            Empowering communities.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-neutral/90">{aboutData.mission}</p>
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
                    <span className="text-green-1 text-xl">→</span>
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
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-deep">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square bg-deep/5 mb-6 overflow-hidden">
                  <img
                    src={member.headshotPath || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-deep">{member.name}</h3>
                <p className="text-green-1 font-medium mb-4">{member.role}</p>
                <p className="text-deep/70 text-sm leading-relaxed mb-4">{member.bio}</p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-green-1 hover:text-deep transition-colors text-sm font-medium"
                  >
                    Contact →
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-deep text-center">Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {aboutData.partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center p-4">
                <span className="text-deep/40 text-sm font-medium text-center">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-[#281f1f] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Let's work together</h2>
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
