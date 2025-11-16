'use client'

import Link from 'next/link'
import { PROJECT_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter submission logic would go here
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">I</span>
              </div>
              <span className="font-bold text-2xl text-foreground">{PROJECT_NAME}</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Safe, social learning for kids aged 6-12. Making education fun and secure.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Parent Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Get the latest educational tips and InstaEdu updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-full"
                required
              />
              <Button type="submit" className="rounded-full flex-shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2025 {PROJECT_NAME}. All rights reserved. Built with ❤️ for children's education.</p>
        </div>
      </div>
    </footer>
  )
}
