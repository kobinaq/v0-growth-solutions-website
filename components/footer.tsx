import Link from "next/link"
import siteData from "@/content/site.json"

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-12 px-6 border-t border-gray-200">
      <div className="max-w-[980px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1d1d1f]">{siteData.siteTitle}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Community-led solutions for sustainable development across Ghana.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#1d1d1f]">Contact</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">{siteData.address}</p>
            <p className="text-sm text-gray-600">{siteData.phonePrimary}</p>
            <p className="text-sm text-gray-600">{siteData.contactEmail}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#1d1d1f]">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-gray-600 hover:text-[#056f39] transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="text-sm text-gray-600 hover:text-[#056f39] transition-colors">
                Projects
              </Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-[#056f39] transition-colors">
                Services
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 text-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {siteData.siteTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
