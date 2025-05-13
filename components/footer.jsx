import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-green-600">🌱</span> Ecosphere
          </Link>
          <p className="text-sm text-muted-foreground">
            Connect with plant enthusiasts and shop for plants, seeds, and gardening tools.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Explore</h3>
          <nav className="grid gap-2 text-sm">
            <Link href="/marketplace" className="text-muted-foreground hover:text-foreground">
              Marketplace
            </Link>
            <Link href="/community" className="text-muted-foreground hover:text-foreground">
              Community
            </Link>
            <Link href="/events" className="text-muted-foreground hover:text-foreground">
              Events
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Company</h3>
          <nav className="grid gap-2 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/careers" className="text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Subscribe to our newsletter</h3>
          <form className="flex gap-2">
            <Input placeholder="Enter your email" type="email" className="max-w-[220px]" />
            <Button type="submit" size="sm">
              Subscribe
            </Button>
          </form>
          <div className="flex gap-2 mt-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ecosphere. All rights reserved.</p>
          <nav className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

