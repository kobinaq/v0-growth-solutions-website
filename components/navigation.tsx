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
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e1eddf]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand: image logo (light) and white logo for dark backgrounds if needed */}
            <Link href="/" className="flex items-center">
              {/* light logo (default) */}
              <span className="sr-only">{siteData.siteTitle} — Home</span>
              <Image
                src="/logo.svg"
                alt={siteData.siteTitle}
                width={160}
                height={40}
                priority
                className="h-10 w-auto block"
              />
              {/* example: if you have a white variant, you can include it and toggle with dark classes:
                  <Image src="/logo-white.svg" alt={siteData.siteTitle} width={160} height={40}
                    className="h-10 w-auto hidden dark:block" />
              */}
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
                    className={`text-[#281f1f] hover:text-[#056f39] font-medium transition-colors ${
                      isActive ? "underline underline-offset-4 decoration-2" : ""
                    }`}
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
              className="md:hidden text-[#281f1f] p-2 rounded"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div id="mobile-navigation" className="md:hidden mt-4 pb-4 border-t border-[#e1eddf] pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-[#281f1f] hover:text-[#056f39] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
