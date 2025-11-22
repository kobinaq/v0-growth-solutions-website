"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import siteData from "@/content/site.json"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/about#contact" },
  ]

  // close mobile nav on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // handle links with hash fragments
  const handleNavClick = async (e, href) => {
    if (href.includes("#")) {
      e.preventDefault()
      const [path, hash] = href.split("#")
      const targetId = hash

      if (pathname === path || (path === "" && pathname === "/")) {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          window.history.replaceState({}, "", `${path}#${targetId}`)
        } else {
          router.push(href)
        }
      } else {
        await router.push(path)
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 150)
      }
      setIsOpen(false)
      return
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
      >
        Skip to content
      </a>

      {/* Floating Glass Island Navigation */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="sr-only">{siteData.siteTitle}</span>
              <Image
                src="/logo.svg"
                alt={siteData.siteTitle}
                width={120}
                height={30}
                priority
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const basePath = link.href.split("#")[0] || "/"
                const isActive = basePath === pathname
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full
                      ${isActive
                        ? "bg-black text-white"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-1">
              {navLinks.map((link) => {
                const basePath = link.href.split("#")[0] || "/"
                const isActive = basePath === pathname
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      block px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-full
                      ${isActive
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
