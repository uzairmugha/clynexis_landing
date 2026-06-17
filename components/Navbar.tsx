'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Activity } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Roles', href: '#roles' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-blur bg-white/90 shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Clyn<span className="text-[#00C9A7]">exis</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#00C9A7] ${
                  scrolled ? 'text-slate-600' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#demo"
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-[#0A6E8A]' : 'text-white/85 hover:text-white'
              }`}
            >
              Sign In
            </a>
            <a
              href="#demo"
              className="px-5 py-2.5 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white text-sm font-semibold transition-all btn-glow shadow-md"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-[#E8F4FD] hover:text-[#0A6E8A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#demo"
                className="block w-full text-center px-5 py-3 rounded-xl bg-[#00C9A7] text-white font-semibold hover:bg-[#00b394] transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
