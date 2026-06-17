'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import { MessageCircle } from 'lucide-react'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20">{children}</div>
      <Footer />
      <a
        href="/contact"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold text-sm shadow-2xl btn-glow transition-all hover:scale-105 active:scale-95"
        aria-label="Book a Demo"
      >
        <MessageCircle className="w-4 h-4" />
        Book a Demo
      </a>
    </main>
  )
}
