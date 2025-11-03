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

  // handle links with hash fragments so /about#contact reliably scrolls to the form
  const handleNavClick = async (e, href) => {
    if (href.includes("#")) {
      e.preventDefault()
      const [path, hash] = href.split("#")
      const targetId = hash

      if (pathname === path || (path === "" && pathname === "/")) {
        // same page — scroll to element if present
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          // update URL hash without reloading
          window.history.replaceState({}, "", `${path}#${targetId}`)
        } else {
          // fallback: navigate to path
          router.push(href)
        }
      } else {
        // navigate to the page, then scroll after render
        await router.push(path)
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 150)
      }
      setIsOpen(false)
      return
    }

    // normal link: just close the mobile menu (Link will handle navigation)
    setIsOpen(false)
  }

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-black px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e1eddf] shadow-sm transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand: image logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="sr-only">{siteData.siteTitle} — Home</span>
              <Image
                src="/logo.svg"
                alt={siteData.siteTitle}
                width={160}
                height={40}
                priority
                className="h-10 w-auto block"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const basePath = link.href.split("#")[0] || "/"
                const isActive = basePath === pathname
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[#281f1f] hover:text-[#056f39] font-medium transition-all duration-200 relative ${
                      isActive ? "text-[#056f39]" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#056f39] rounded-full"></span>
                    )}
                  </Link>
                )
              })}
              <Link
                href="/about#contact"
                onClick={(e) => handleNavClick(e, "/about#contact")}
                className="bg-[#056f39] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#044d28] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#281f1f] p-2 rounded hover:bg-[#e1eddf] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div id="mobile-navigation" className="md:hidden mt-4 pb-4 border-t border-[#e1eddf] pt-4 animate-fade-in-scale">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 px-4 text-[#281f1f] hover:text-[#056f39] hover:bg-[#e1eddf] rounded-lg font-medium transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about#contact"
                onClick={(e) => handleNavClick(e, "/about#contact")}
                className="block mt-4 text-center bg-[#056f39] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#044d28] transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
