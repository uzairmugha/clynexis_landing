'use client'

import Link from 'next/link'
import { Activity, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const links = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Roles', href: '/#roles' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Changelog', href: '/changelog' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Data Processing', href: '/data-processing' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
  Support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Onboarding Guide', href: '/onboarding' },
    { label: 'API Docs', href: '/api-docs' },
    { label: 'Status', href: '/status' },
    { label: 'Contact Support', href: '/contact-support' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0D2F4F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#0A6E8A] flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Clyn<span className="text-[#00C9A7]">exis</span>
              </span>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              The complete clinic management platform for modern healthcare providers. Trusted by 500+ clinics across Pakistan and the UAE.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: 'hello@clynexis.com' },
                { icon: Phone, text: '+92 317 1973741 ' },
                { icon: MapPin, text: 'Rawalpindi, Pakistan' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-white/50 text-sm">
                  <Icon className="w-4 h-4 text-[#00C9A7] flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Facebook, label: 'Facebook' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#00C9A7] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white/90 uppercase tracking-widest mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/45 hover:text-[#00C9A7] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} Clynexis Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00C9A7] pulse-dot" />
            <span className="text-white/35 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}