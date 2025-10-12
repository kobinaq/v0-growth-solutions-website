import Link from "next/link"
import { useEffect, useState } from "react"
import projectsData from "@/content/projects/all-projects.json"

// ProjectsPage: picks images automatically from /public/assets/projects/
// Image naming convention: project1-1.jpg, project1-2.jpg, ..., project2-1.jpg, etc.
// If a project has an explicit `gallery` array in the JSON, those paths are used first.

const MAX_IMAGES_PER_PROJECT = 6 // how many variants we will try (projectN-1 ... projectN-6)

type Project = any

export default function ProjectsPage() {
  const projects: Project[] = projectsData

  // map slug -> first valid image url (or placeholder)
  const [firstImageMap, setFirstImageMap] = useState<Record<string, string>>({})

  useEffect(() => {
    let mounted = true

    async function findImages() {
      const map: Record<string, string> = {}

      // sequentially check each project for an image
      await Promise.all(
        projects.map(async (project, idx) => {
          const slug = project.slug

          // 1) prefer explicit gallery values from the JSON when present
          const explicit = Array.isArray(project.gallery) && project.gallery.length > 0
            ? project.gallery
            : null

          if (explicit) {
            // validate explicit images and take the first that loads successfully
            for (const url of explicit) {
              const ok = await loadImage(url)
              if (ok) {
                map[slug] = url
                break
              }
            }
          }

          // 2) fallback: generate candidate filenames based on project index (1-based)
          if (!map[slug]) {
            // Use the index order (project1, project2...) instead of the slug
            const projectNumber = idx + 1
            for (let i = 1; i <= MAX_IMAGES_PER_PROJECT; i++) {
              const candidate = `/assets/projects/project${projectNumber}-${i}.jpg`
              // try webp too (optional) - prefer webp if available
              const candidateWebp = `/assets/projects/project${projectNumber}-${i}.webp`

              // check webp first (faster if exists on server), then jpg
              const okWebp = await loadImage(candidateWebp)
              if (okWebp) {
                map[slug] = candidateWebp
                break
              }

              const okJpg = await loadImage(candidate)
              if (okJpg) {
                map[slug] = candidate
                break
              }
            }
          }

          // 3) last fallback: placeholder
          if (!map[slug]) {
            map[slug] = "/placeholder.svg"
          }
        })
      )

      if (mounted) setFirstImageMap(map)
    }

    findImages()

    return () => {
      mounted = false
    }
  }, [projects])

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
          <p className="text-xl md:text-2xl max-w-3xl text-neutral/90">
            Explore our work across Ghana—from water systems to renewable energy, from livelihood programs to governance
            strengthening.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-[#056f39] text-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <article key={project.slug} className="group">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="aspect-[4/3] bg-deep/10 overflow-hidden rounded-xl">
                      <img
                        src={firstImageMap[project.slug] || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="text-white/70 font-medium mb-4">
                      {project.focusArea} • {project.location}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">{project.title}</h2>
                    <p className="text-lg text-white/80 mb-6 leading-relaxed">{project.challenge}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {project.metrics?.map((metric: any, i: number) => (
                        <div key={i}>
                          <div className="font-display text-3xl font-bold text-white mb-1">{metric.value}</div>
                          <div className="text-sm text-white/70">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
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
      <section className="py-20 md:py-28 bg-[#281f1f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Start your project</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Every community has unique strengths. Let's discover yours together.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-[#056f39] text-white px-12 py-4 text-lg font-bold hover:bg-neutral transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  )
}

// helper: load image and return true if it loads successfully
function loadImage(url: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}
