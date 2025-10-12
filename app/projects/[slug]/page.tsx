import Link from "next/link"
import { notFound } from "next/navigation"
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
      <section className="bg-deep text-neutral py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link href="/projects" className="text-neutral/70 hover:text-neutral transition-colors">
              ← Back to Projects
            </Link>
          </div>
          <div className="text-green-2 font-medium mb-6">
            {project.focusArea} • {project.location} • {project.dates}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {project.title}
          </h1>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            {project.metrics?.map((metric: any, i: number) => (
              <div key={i}>
                <div className="font-display text-4xl md:text-5xl font-bold text-green-2 mb-2">{metric.value}</div>
                <div className="text-neutral/80 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-neutral">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {(project.gallery && project.gallery.length > 0 ? project.gallery : ["/placeholder.svg"]).map(
              (image: GalleryItem, i: number) => {
                const { src, alt } = resolveImage(image)
                return (
                  <div key={i} className="aspect-[4/3] bg-deep/10 overflow-hidden rounded-md">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-deep">The Challenge</h2>
              <p className="text-lg leading-relaxed text-deep/80">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-deep">Our Approach</h2>
              <p className="text-lg leading-relaxed text-deep/80">{project.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-deep">Outcomes & Impact</h2>
          <ul className="space-y-6 max-w-4xl">
            {project.outcomes?.map((outcome: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-green-1 text-2xl font-bold">{i + 1}.</span>
                <span className="text-lg text-deep/80 pt-1">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 md:py-28 bg-green-1 text-white">
          <div className="container mx-auto px-6">
            <blockquote className="max-w-4xl mx-auto">
              <p className="font-display text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <footer>
                <div className="font-bold">{project.testimonial.author}</div>
                <div className="text-white/80">{project.testimonial.role}</div>
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-deep">Ready for similar impact?</h2>
          <Link
            href="/about"
            className="inline-block bg-green-1 text-white px-12 py-4 text-lg font-bold hover:bg-deep transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </main>
  )
}
