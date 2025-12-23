import Link from "next/link"
import siteData from "@/content/site.json"

export default function Footer() {
  return (
    <footer className="bg-muted/10 text-foreground py-24 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold tracking-tight">{siteData.siteTitle}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Community-led solutions for sustainable development across Ghana.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Contact</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm leading-relaxed">{siteData.address}</p>
              <p className="text-foreground text-sm font-medium">{siteData.phonePrimary}</p>
              <p className="text-foreground text-sm font-medium">{siteData.contactEmail}</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[11px] font-medium tracking-wider uppercase">
            &copy; {new Date().getFullYear()} {siteData.siteTitle}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="#" className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">Dribbble</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
