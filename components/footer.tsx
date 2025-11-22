import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import siteData from "@/content/site.json"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Brand & Description */}
          <div>
            <h3 className="text-3xl font-bold text-[#111111] mb-4 tracking-tight">
              {siteData.siteTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Community-led solutions for sustainable development across Ghana. Building capacity, empowering communities.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${siteData.contactEmail}`}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-900 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href={`tel:${siteData.phonePrimary}`}
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium text-sm hover:border-black hover:text-black transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                Navigate
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors text-sm">
                  About
                </Link>
                <Link href="/projects" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Projects
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Services
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <p className="leading-relaxed">{siteData.address}</p>
                <a href={`tel:${siteData.phonePrimary}`} className="hover:text-black transition-colors">
                  {siteData.phonePrimary}
                </a>
                <a href={`mailto:${siteData.contactEmail}`} className="hover:text-black transition-colors">
                  {siteData.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {siteData.siteTitle}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-black transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-black transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
