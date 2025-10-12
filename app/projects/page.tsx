// app/projects/page.tsx
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import projectsData from "@/content/projects/all-projects.json"

const MAX_IMAGES_PER_PROJECT = 6

function loadImage(url: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export default function ProjectsPage() {
  const projects = projectsData
  const [firstImageMap, setFirstImageMap] = useState<Record<string, string>>({})

  useEffect(() => {
    let mounted = true

    async function findImages() {
      const map: Record<string, string> = {}

      await Promise.all(
        projects.map(async (project: any, idx: number) => {
          const slug = project.slug
          const explicit = Array.isArray(project.gallery) && project.gallery.length > 0 ? project.gallery : null

          if (explicit) {
            for (const url of explicit) {
              if (await loadImage(url)) {
                map[slug] = url
                break
              }
            }
          }

          if (!map[slug]) {
            const projectNumber = idx + 1
            for (let i = 1; i <= MAX_IMAGES_PER_PROJECT; i++) {
              const candidateWebp = `/assets/projects/project${projectNumber}-${i}.webp`
              const candidateJpg = `/assets/projects/project${projectNumber}-${i}.jpg`

              if (await loadImage(candidateWebp)) {
                map[slug] = candidateWebp
                break
              }
              if (await loadImage(candidateJpg)) {
                map[slug] = candidateJpg
                break
              }
            }
          }

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
      {/* ... your JSX remains exactly as before ... */}
      {/* Use firstImageMap[project.slug] for image src */}
    </main>
  )
}
