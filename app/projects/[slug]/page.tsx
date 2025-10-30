import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import projects from "@/content/projects/all-projects.json"

export function generateStaticParams() {
  return projects.map((project: any) => ({
    slug: project.slug,
  }))
}

type GalleryItem = string | { src?: string; altText?: string }

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p: any) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Helper to normalise gallery entries
  const resolveImage = (item: GalleryItem) => {
    if (!item) return { src: "/placeholder.svg", alt: `${project.title} image` }
    if (typeof item === "string") return { src: item, alt: `${project.title} image` }
    return { src: item.src ?? "/placeholder.svg", alt: item.altText ?? `${project.title} image` }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#056f39] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: project.gallery && project.gallery.length > 0
                ? `url('${typeof project.gallery[0] === 'string' ? project.gallery[0] : project.gallery[0].src}')`
                : "url('/hero-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              ← Back to Projects
            </Link>
          </div>
          <div className="text-[#b3e88a] font-semibold mb-6 text-lg">
            {project.focusArea} • {project.location} • {project.dates}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight max-w-4xl">
            {project.title}
          </h1>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
              {project.metrics.map((metric: any, i: number) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[#b3e88a] mb-2">{metric.value}</div>
                  <div className="text-white/90 text-sm font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery - Enhanced with multiple images support */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#281f1f] mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(project.gallery && project.gallery.length > 0 ? project.gallery : ["/placeholder.svg"]).map(
              (image: GalleryItem, i: number) => {
                const { src, alt } = resolveImage(image)
                // Check if it's a video (simple check based on extension)
                const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov')

                return (
                  <div key={i} className="aspect-video bg-gray-100 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    {isVideo ? (
                      <video
                        src={src}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="py-20 md:py-28 bg-[#e1eddf]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#056f39]">The Challenge</h2>
              <p className="text-lg leading-relaxed text-[#281f1f]/80">{project.challenge}</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#056f39]">Our Approach</h2>
              <p className="text-lg leading-relaxed text-[#281f1f]/80">{project.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-28 bg-[#056f39] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">Outcomes & Impact</h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {project.outcomes?.map((outcome: string, i: number) => (
              <li key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <span className="text-[#b3e88a] text-2xl font-bold flex-shrink-0">{i + 1}.</span>
                <span className="text-lg text-white/90 leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#281f1f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready for similar impact?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how we can bring sustainable change to your community.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 bg-[#056f39] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#b3e88a] hover:text-[#056f39] transition-all duration-300 shadow-lg"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
