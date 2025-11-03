import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CardProps {
  title: string
  description: string
  href?: string
  icon?: React.ReactNode
  image?: string
  tags?: string[]
  className?: string
}

export default function Card({
  title,
  description,
  href,
  icon,
  image,
  tags,
  className = "",
}: CardProps) {
  const CardContent = () => (
    <>
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className={`${image ? "p-6" : "p-8"}`}>
        {icon && <div className="text-4xl text-[#056f39] mb-4">{icon}</div>}
        <h3 className="text-2xl font-bold text-[#281f1f] mb-3 group-hover:text-[#056f39] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#281f1f]/70 leading-relaxed mb-4 group-hover:text-[#281f1f] transition-colors duration-300">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#e1eddf] text-[#056f39] text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <div className="flex items-center gap-2 text-[#056f39] font-semibold group-hover:gap-3 transition-all duration-300">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </>
  )

  const baseClasses = `group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${className}`

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <CardContent />
      </Link>
    )
  }

  return (
    <div className={baseClasses}>
      <CardContent />
    </div>
  )
}
