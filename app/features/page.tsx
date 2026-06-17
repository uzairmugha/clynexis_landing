'use client'

import PageShell from '@/components/PageShell'
import RoleCards from '@/components/RoleCards'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import { ArrowRight, Mic, Brain, Printer, GitBranch, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  { icon: Mic, title: 'Voice Prescription Engine', color: '#7C3AED', desc: 'Our proprietary NLP engine understands medical terminology in English and transliterations of Urdu drug names. It auto-maps spoken words to the medicine database, fills dosage, frequency, and duration, and generates Urdu patient instructions — all in under 10 seconds.' },
  { icon: Brain, title: 'AI Clinical Decision Support', color: '#0891B2', desc: 'Integrated with a curated medical knowledge base updated quarterly. Suggests differential diagnoses, flags drug interactions, recommends evidence-based tests, and learns from anonymised aggregate prescription patterns at your clinic.' },
  { icon: Printer, title: 'Smart Print & Share', color: '#FF6B35', desc: 'A4 prescription with your clinic letterhead, doctor credentials, barcode for pharmacy scan, QR for patient digital access, and Urdu advice block. One click to WhatsApp PDF directly to the patient.' },
  { icon: GitBranch, title: 'Multi-Branch Architecture', color: '#4A6FA5', desc: 'True data isolation per branch with shared catalogue. Each clinic admin sees only their data. Super Admin sees aggregate dashboards across all branches with drill-down capability.' },
  { icon: Shield, title: 'Role-Based Access Control', color: '#0A6E8A', desc: 'Granular permissions at feature level. Receptionist cannot access doctor\'s notes. Pharmacist cannot see lab results. Every action is logged with timestamp and user ID for full audit trail.' },
  { icon: BarChart3, title: 'Real-Time Analytics', color: '#00C9A7', desc: 'Live dashboards for patient volume, revenue, inventory movement, and staff performance. Scheduled PDF reports delivered to admin email nightly. Custom date ranges and export to Excel.' },
]

export default function FeaturesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/20">Full Feature Overview</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Every tool your clinic needs,<br />
            <span className="text-[#00C9A7]">nothing it doesn't</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From the moment a patient walks in to the moment they walk out, Clynexis handles the paperwork so your team can focus on care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="px-7 py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold inline-flex items-center gap-2 transition-all btn-glow">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Deep feature cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900">Deep-dive into the technology</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">The features that make Clynexis different from every other clinic system on the market.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {highlights.map(({ icon: Icon, title, color, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: color + '18' }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse role cards section */}
      <RoleCards />

      {/* How it works */}
      <HowItWorks />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">See every feature live</h2>
          <p className="text-white/65 mb-8">A 30-minute personalised demo — tailored to your clinic type, size, and workflow.</p>
          <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold transition-all btn-glow inline-flex items-center gap-2">
            Book Your Free Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
