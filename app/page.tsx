'use client'

import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import RoleCards from '@/components/RoleCards'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import DoctorTrust from '@/components/DoctorTrust'
import Pricing from '@/components/Pricing'
import DemoSection from '@/components/DemoSection'
import Footer from '@/components/Footer'

export default function Home() {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <RoleCards />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DoctorTrust />
      <Pricing />
      <DemoSection />
      <Footer />

      {/* Floating Book Demo button */}
      <a
        href="#demo"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold text-sm shadow-2xl btn-glow transition-all hover:scale-105 active:scale-95"
        aria-label="Book a Demo"
      >
        <MessageCircle className="w-4 h-4" />
        Book a Demo
      </a>
    </main>
  )
}
