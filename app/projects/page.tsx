import Link from "next/link"
import projectsData from "@/content/projects/all-projects.json"

const FOCUS_ORDER = [
  "Organizational Development",
  "Energy and Green Transition",
  "Governance",
  "Gender and Social Inclusion",
  "Environment",
]

export default function ProjectsPage() {
  const projects = projectsData

  // group projects by focus area
  const grouped = FOCUS_ORDER.map((focus) => ({
    focus,
    items: projects.filter((p) => p.focusArea === focus),
  }))

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#056f39] text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Real impact.
            <br />
            Real communities.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-white/90">
            Explore our work across Ghana—from water systems to renewable energy, from livelihood programs to governance strengthening.
          </p>
        </div>
      </section>

      {/* Projects by Focus Area */}
      <section className="py-20 md:py-28 bg-[#e1eddf] text-[#281f1f]">
        <div className="container mx-auto px-6 space-y-20">
          {grouped.map(({ focus, items }) => (
            <div key={focus}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">{focus}</h2>

              {items.length === 0 ? (
                <p className="text-lg text-[#281f1f]/70 mb-8">No projects listed under this focus area yet.</p>
              ) : (
                <div className="space-y-12">
                  {items.map((project, idx) => (
                    <article key={project.slug} className="group">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                          <div className="aspect-[4/3] bg-[#281f1f]/5 overflow-hidden rounded-xl">
                            <img
                              src={project.gallery?.[0]?.src || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`${idx % 2 === 1 ? "md:order-1" : ""}`}>
                          <div className="text-[#056f39] font-medium mb-4">
                            {project.focusArea} • {project.location}
                          </div>
                          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                          <p className="text-lg text-[#281f1f]/80 mb-6 leading-relaxed">{project.challenge}</p>

                          {/* Metrics */}
                          {project.metrics?.length > 0 && (
                            <div className="grid grid-cols-3 gap-6 mb-6">
                              {project.metrics.map((metric, i) => (
                                <div key={i}>
                                  <div className="font-display text-2xl font-bold text-[#056f39] mb-1">{metric.value}</div>
                                  <div className="text-sm text-[#281f1f]/60">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                          )}

                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 text-[#056f39] font-bold hover:gap-4 transition-all"
                          >
                            View Case Study →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#281f1f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Start your project</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Every community has unique strengths. Let's discover yours together.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-[#056f39] text-white px-12 py-4 text-lg font-bold hover:bg-[#044d28] transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  )
}
