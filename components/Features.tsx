'use client'

import { Mic, Brain, BookOpen, Copy, Printer, GitBranch, Zap } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Voice Prescription',
    description:
      'Speak naturally and watch medicines auto-populate in the prescription table with dosage and duration. Urdu patient instructions generated automatically — no typing required.',
    badge: 'Pro Feature',
    color: '#7C3AED',
    bg: '#F3F0FF',
  },
  {
    icon: Brain,
    title: 'AI Clinical Suggestions',
    description:
      'Evidence-based AI prompts for diagnoses, recommended tests, and treatment alternatives — right inside the consultation screen. Reduce diagnostic errors by 87%.',
    badge: 'Pro Feature',
    color: '#0891B2',
    bg: '#E0F7FA',
  },
  {
    icon: BookOpen,
    title: 'Medicine Groups',
    description:
      'Create protocol bundles (e.g., "Typhoid Protocol") and add 8 medicines with one click. Your most common treatment plans, one tap away.',
    badge: 'All Plans',
    color: '#00C9A7',
    bg: '#E8FDF6',
  },
  {
    icon: Copy,
    title: 'Similar Rx & Past Notes',
    description:
      'Instantly view past prescriptions for similar diagnoses and reuse them with a single click. Patient history, vitals, and doctor notes always in context.',
    badge: 'All Plans',
    color: '#0A6E8A',
    bg: '#E8F4FD',
  },
  {
    icon: Printer,
    title: 'A4 Print with Urdu Advice',
    description:
      'Professional A4 prescriptions with clinic letterhead, doctor credentials, QR code for digital access, and patient advice in Urdu script — print or share via WhatsApp.',
    badge: 'All Plans',
    color: '#FF6B35',
    bg: '#FFF3EE',
  },
  {
    icon: GitBranch,
    title: 'Multi-Clinic / Multi-Branch',
    description:
      'One login to manage multiple branches. Separate data, shared catalogue. Finance, staff, and reports segmented per clinic — perfect for growing healthcare networks.',
    badge: 'Enterprise',
    color: '#4A6FA5',
    bg: '#EEF2FF',
  },
]

const badgeColors: Record<string, string> = {
  'Pro Feature': '#7C3AED',
  'All Plans': '#00C9A7',
  'Enterprise': '#4A6FA5',
}

export default function Features() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8FDF6] text-[#00C9A7] text-sm font-semibold mb-4">
            Unique Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Built for how clinics{' '}
            <span className="gradient-text">actually work</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Features designed from thousands of hours in real clinics — not boardrooms. These are the tools your team has been asking for.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group relative p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Top: icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: f.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: f.color }} />
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: badgeColors[f.badge] + '18',
                      color: badgeColors[f.badge],
                    }}
                  >
                    {f.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: f.color }}
                />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0D2F4F] to-[#0A6E8A] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00C9A7] opacity-10 blur-3xl pointer-events-none" />
          <Zap className="w-10 h-10 text-[#00C9A7] mx-auto mb-4" />
          <h3 className="text-2xl font-black text-white mb-2">
            See all features in action
          </h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Book a live 30-minute demo and let our team walk you through every feature tailored to your clinic size.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold transition-all btn-glow"
          >
            Book Your Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}
