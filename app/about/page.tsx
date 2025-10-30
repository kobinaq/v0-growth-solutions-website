import aboutData from "@/content/about.json"
import sarahData from "@/content/team/sarah-naa-dedei.json"
import maxwellData from "@/content/team/maxwell-bentil.json"

const teamMembers = [sarahData, maxwellData]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#056f39] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-3xl">
            Building capacity.
            <br />
            Empowering communities.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-95 leading-relaxed">
            {aboutData.mission}
          </p>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#281f1f]">Our Ethos</h2>
              <p className="text-lg leading-relaxed text-[#281f1f]/80">{aboutData.ethos}</p>
            </div>
            <div className="bg-[#e1eddf] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#281f1f]">Guiding Principles</h3>
              <ul className="space-y-4">
                {aboutData.guidingPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white bg-[#056f39] rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[#281f1f]/80 leading-relaxed">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#281f1f]">Our Approach</h2>
          <p className="text-xl leading-relaxed text-[#281f1f]/80 max-w-4xl">{aboutData.approach}</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Meet the Team</h2>
          <p className="text-xl text-center text-[#281f1f]/70 mb-16 max-w-3xl mx-auto">
            Passionate professionals dedicated to sustainable community development
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                    <img
                      src={member.headshotPath || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-[#281f1f]">
                    {member.name}
                  </h3>
                  <p className="text-[#056f39] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-base text-[#281f1f]/80 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-[#056f39] hover:text-[#044d28] font-medium transition-colors"
                    >
                      Contact
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#281f1f]">
            Trusted Partners
          </h2>
          <p className="text-xl text-center text-[#281f1f]/70 mb-16 max-w-3xl mx-auto">
            Collaborating with organizations to amplify our impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {aboutData.partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
              >
                {partner.logoPath ? (
                  <img
                    src={partner.logoPath}
                    alt={partner.name}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <span className="text-[#281f1f]/60 text-sm font-medium text-center">
                    {partner.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#281f1f]">Let's work together</h2>
            <p className="text-xl text-[#281f1f]/70">
              Ready to create meaningful change in your community? Get in touch with us.
            </p>
          </div>

          <form className="space-y-6 bg-[#e1eddf] p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-[#281f1f]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-transparent text-[#281f1f] placeholder:text-[#281f1f]/50 focus:outline-none focus:border-[#056f39] transition-colors rounded"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-[#281f1f]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-transparent text-[#281f1f] placeholder:text-[#281f1f]/50 focus:outline-none focus:border-[#056f39] transition-colors rounded"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-bold mb-2 text-[#281f1f]">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-4 py-3 bg-white border-2 border-transparent text-[#281f1f] placeholder:text-[#281f1f]/50 focus:outline-none focus:border-[#056f39] transition-colors rounded"
                placeholder="Your organization (optional)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-[#281f1f]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border-2 border-transparent text-[#281f1f] placeholder:text-[#281f1f]/50 focus:outline-none focus:border-[#056f39] transition-colors resize-none rounded"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#056f39] text-white px-10 py-4 text-lg font-bold hover:bg-[#b3e88a] hover:text-[#056f39] transition-all duration-300 rounded shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
