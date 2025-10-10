import Link from "next/link"
import siteData from "@/content/site.json"

export default function Footer() {
  return (
    <footer className="bg-[#281f1f] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteData.siteTitle}</h3>
            <p className="text-white/70 leading-relaxed">
              Community-led solutions for sustainable development across Ghana.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-2">{siteData.address}</p>
            <p className="text-white/70 text-sm">{siteData.phonePrimary}</p>
            <p className="text-white/70 text-sm">{siteData.contactEmail}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                Services
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {siteData.siteTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
