import aboutData from "@/content/about.json"
import sarahData from "@/content/team/sarah-naa-dedei.json"
import maxwellData from "@/content/team/maxwell-bentil.json"

const teamMembers = [sarahData, maxwellData]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Apple Style */}
      <section className="bg-white py-32 md:py-40">
        <div className="max-w-[980px] mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-[1.05] tracking-tight text-[#1d1d1f] animate-fade-in-up">
            Building capacity.
            <br />
            Empowering communities.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl text-gray-600 leading-snug animate-fade-in-up delay-200">
            {aboutData.mission}
          </p>
        </div>
      </section>

      {/* Ethos Section - Apple Style */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1d1d1f] tracking-tight">Our Ethos</h2>
              <p className="text-lg leading-relaxed text-gray-600">{aboutData.ethos}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#1d1d1f]">Guiding Principles</h3>
              <ul className="space-y-4">
                {aboutData.guidingPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white bg-[#056f39] rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      →
                    </span>
                    <span className="text-gray-600">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Apple Style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-[#1d1d1f] tracking-tight">Our Approach</h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">{aboutData.approach}</p>
        </div>
      </section>

      {/* Team Section - Apple Style */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-[#1d1d1f] tracking-tight animate-fade-in-up">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="aspect-square bg-gray-200 mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.headshotPath || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">
                  {member.name}
                </h3>
                <p className="text-[#056f39] font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="group/link inline-block text-[#056f39] hover:underline text-sm font-medium"
                  >
                    Contact
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200 inline-block ml-1">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Apple Style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-[#1d1d1f] text-center tracking-tight">
            Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {aboutData.partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {partner.logoPath ? (
                  <img
                    src={partner.logoPath}
                    alt={partner.name}
                    className="w-24 h-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-400 text-xs font-medium text-center">
                    {partner.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Apple Style */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#1d1d1f] tracking-tight">Let's work together</h2>
            <p className="text-xl text-gray-600">
              Ready to create meaningful change in your community? Get in touch with us.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1d1d1f]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1d1d1f] placeholder:text-gray-400 focus:outline-none focus:border-[#056f39] transition-colors rounded-lg"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1d1d1f]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1d1d1f] placeholder:text-gray-400 focus:outline-none focus:border-[#056f39] transition-colors rounded-lg"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium mb-2 text-[#1d1d1f]">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1d1d1f] placeholder:text-gray-400 focus:outline-none focus:border-[#056f39] transition-colors rounded-lg"
                placeholder="Your organization (optional)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1d1d1f]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1d1d1f] placeholder:text-gray-400 focus:outline-none focus:border-[#056f39] transition-colors resize-none rounded-lg"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#056f39] text-white px-8 py-3.5 text-base font-medium hover:bg-[#044d28] transition-colors rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
