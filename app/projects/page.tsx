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
              Real impact.
              <br />
              Real communities.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-white/90 animate-slide-in-up delay-200">
            Explore our work across Ghana—from water systems to renewable energy, from livelihood programs to governance strengthening.
          </p>
        </div>
      </section>

      {/* Projects by Focus Area */}
      <section className="py-20 md:py-28 bg-[#ffffff] text-[#281f1f] relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23056f39' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 space-y-20 relative z-10">
          {grouped.map(({ focus, items }, focusIndex) => (
            <div key={focus} className="animate-fade-in-scale" style={{ animationDelay: `${focusIndex * 0.3}s` }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#281f1f] to-[#056f39] bg-clip-text text-transparent">
                {focus}
              </h2>

              {items.length === 0 ? (
                <p className="text-lg text-[#281f1f]/70 mb-8">No projects listed under this focus area yet.</p>
              ) : (
                <div className="space-y-16">
                  {items.map((project, idx) => (
                    <article key={project.slug} className="group animate-fade-in-scale" style={{ animationDelay: `${(focusIndex * 0.3) + (idx * 0.2)}s` }}>
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                          <div className="aspect-[4/3] bg-[#281f1f]/5 overflow-hidden rounded-xl group-hover:shadow-xl transition-all duration-500">
                            <img
                              src={project.gallery?.[0]?.src || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`${idx % 2 === 1 ? "md:order-1" : ""}`}>
                          <div className="text-[#056f39] font-medium mb-4 group-hover:text-[#044d28] transition-colors duration-300">
                            {project.focusArea} • {project.location}
                          </div>
                          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#056f39] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-lg text-[#281f1f]/80 mb-6 leading-relaxed group-hover:text-[#281f1f] transition-colors duration-300">
                            {project.challenge}
                          </p>

                          {/* Metrics */}
                          {project.metrics?.length > 0 && (
                            <div className="grid grid-cols-3 gap-6 mb-6">
                              {project.metrics.map((metric, i) => (
                                <div key={i} className="group/metric">
                                  <div className="font-display text-2xl font-bold text-[#056f39] mb-1 group-hover/metric:scale-110 transition-transform duration-300">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-[#281f1f]/60 group-hover/metric:text-[#281f1f] transition-colors duration-300">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <Link
                            href={`/projects/${project.slug}`}
                            className="group/link inline-flex items-center gap-2 text-[#056f39] font-bold hover:gap-4 transition-all duration-300 hover:text-[#044d28]"
                          >
                            View Case Study 
                            <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
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
      <section className="py-20 md:py-28 bg-[#281f1f] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-24 h-24 bg-[#056f39]/10 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#b3e88a]/5 rounded-full animate-pulse-glow delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 animate-slide-in-up">Start your project</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-slide-in-up delay-200">
            Every community has unique strengths. Let's discover yours together.
          </p>
          <Link
            href="/about#contact"
            className="group inline-block bg-[#056f39] text-white px-12 py-4 text-lg font-bold hover:bg-[#044d28] transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-in-up delay-300"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  )
}
