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
    { label: "Copy", href: "/about" },
    { label: "CV", href: "/projects" },
  ]

  const socialLinks = [
    { label: "LinkedIn", href: "/about#contact" },
    { label: "Dribbble", href: "/projects" },
    { label: "Instagram", href: "/about#contact" },
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
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-black px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0]/95 backdrop-blur-sm transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Brand: Email/Contact */}
            <Link 
              href="/" 
              className="text-sm text-[#281f1f] hover:text-[#056f39] transition-colors font-medium"
            >
              <span className="sr-only">{siteData.siteTitle} — Home</span>
              kawsari.designs@gmail.com
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const basePath = link.href.split("#")[0] || "/"
                const isActive = basePath === pathname
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm text-[#281f1f] hover:text-[#056f39] font-medium transition-colors ${
                      isActive ? "text-[#056f39]" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Navigation - Right (Social Links) */}
            <div className="hidden md:flex items-center gap-8">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-[#281f1f] hover:text-[#056f39] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#281f1f] p-2 rounded hover:bg-[#281f1f]/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div 
              id="mobile-navigation" 
              className="md:hidden mt-6 pb-4 border-t border-[#281f1f]/10 pt-6 animate-fade-in"
            >
              <div className="space-y-1 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-2.5 px-4 text-[#281f1f] hover:text-[#056f39] hover:bg-[#281f1f]/5 rounded-lg font-medium transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-[#281f1f]/10 pt-4 space-y-1">
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-2.5 px-4 text-[#281f1f] hover:text-[#056f39] hover:bg-[#281f1f]/5 rounded-lg font-medium transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}