import Link from "next/link"
import adaWater from "@/content/projects/ada-community-water.json"
import solarSchool from "@/content/projects/solar-school-accra.json"
import agroforestry from "@/content/projects/agroforestry-livelihoods.json"

const projects = [adaWater, solarSchool, agroforestry]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-deep text-neutral py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Real impact.
            <br />
            Real communities.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-neutral/90">
            Explore our work across Ghana—from water systems to renewable energy, from livelihood programs to governance
            strengthening.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <article key={project.slug} className="group">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="aspect-[4/3] bg-deep/10 overflow-hidden">
                      <img
                        src={project.gallery[0] || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="text-green-1 font-medium mb-4">
                      {project.focusArea} • {project.location}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-deep">{project.title}</h2>
                    <p className="text-lg text-deep/80 mb-6 leading-relaxed">{project.challenge}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="font-display text-3xl font-bold text-green-1 mb-1">{metric.value}</div>
                          <div className="text-sm text-deep/60">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-green-1 font-bold hover:gap-4 transition-all"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-green-1 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Start your project</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Every community has unique strengths. Let's discover yours together.
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-green-1 px-12 py-4 text-lg font-bold hover:bg-neutral transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  )
}
