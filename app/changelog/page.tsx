'use client'

import PageShell from '@/components/PageShell'
import { Zap, Bug, Shield, Star } from 'lucide-react'

const releases = [
  {
    version: 'v3.4.0',
    date: 'June 5, 2024',
    type: 'Major',
    highlights: ['Launched AI Clinical Suggestions with differential diagnosis support', 'Medicine Groups: add full treatment protocols in one click', 'WhatsApp prescription sharing — PDF direct to patient', 'Lab TAT (turnaround time) tracking dashboard'],
    fixes: ['Fixed receipt reprint edge case for refunded payments', 'Improved voice recognition accuracy for common Urdu drug names by 31%'],
    security: [],
  },
  {
    version: 'v3.3.2',
    date: 'May 18, 2024',
    type: 'Patch',
    highlights: [],
    fixes: ['Resolved slow load on patient history with >200 visits', 'Fixed duplicate token generation in concurrent receptionist sessions', 'Print preview now renders correctly on A4 landscape in Firefox'],
    security: ['Strengthened session token rotation — tokens now expire after 8 hours of inactivity'],
  },
  {
    version: 'v3.3.0',
    date: 'April 30, 2024',
    type: 'Minor',
    highlights: ['Similar Rx lookup: find and clone past prescriptions for similar diagnoses', 'Pharmacist expiry alert dashboard with configurable thresholds (7/15/30 days)', 'Multi-language UI: Urdu interface beta for reception module'],
    fixes: ['Fixed edge case where lab result abnormal flag didn\'t persist after page reload'],
    security: [],
  },
  {
    version: 'v3.2.0',
    date: 'March 14, 2024',
    type: 'Minor',
    highlights: ['Super Admin cross-clinic analytics dashboard', 'Salary management module for Clinic Admin', 'Configurable consultation fee tiers (regular, follow-up, specialist)'],
    fixes: ['Queue display board sync improved — now <500ms latency', 'Fixed PDF generation timeout for reports with >1,000 rows'],
    security: ['Enforced 2FA for Super Admin accounts'],
  },
  {
    version: 'v3.1.0',
    date: 'February 1, 2024',
    type: 'Minor',
    highlights: ['Voice prescription engine v2 — 94% accuracy on 10,000-medicine database', 'Urdu patient advice auto-generation from prescription data', 'Lab reference range configuration per age group and gender'],
    fixes: ['Fixed appointment slot overlap when two receptionists book simultaneously'],
    security: [],
  },
]

const typeConfig = {
  Major: { color: '#7C3AED', icon: Star, bg: '#F3F0FF' },
  Minor: { color: '#0A6E8A', icon: Zap, bg: '#E8F4FD' },
  Patch: { color: '#00C9A7', icon: Bug, bg: '#E8FDF6' },
}

export default function ChangelogPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Changelog</h1>
          <p className="text-white/70 text-lg">Every update, fix, and improvement to Clynexis — documented transparently.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A6E8A] to-[#00C9A7] opacity-20" />
            <div className="space-y-12">
              {releases.map((release) => {
                const cfg = typeConfig[release.type as keyof typeof typeConfig]
                const Icon = cfg.icon
                return (
                  <div key={release.version} className="pl-14 relative">
                    <div className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: cfg.color }}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-7">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="text-xl font-black text-slate-900">{release.version}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: cfg.bg, color: cfg.color }}>{release.type} Release</span>
                        <span className="text-slate-400 text-sm">{release.date}</span>
                      </div>

                      {release.highlights.length > 0 && (
                        <div className="mb-5">
                          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-[#7C3AED]" /> New Features
                          </div>
                          <ul className="space-y-2">
                            {release.highlights.map((h) => <li key={h} className="text-slate-700 text-sm flex gap-2"><span className="text-[#00C9A7] mt-1">✓</span>{h}</li>)}
                          </ul>
                        </div>
                      )}
                      {release.fixes.length > 0 && (
                        <div className="mb-5">
                          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                            <Bug className="w-3.5 h-3.5 text-[#FF6B35]" /> Bug Fixes
                          </div>
                          <ul className="space-y-2">
                            {release.fixes.map((f) => <li key={f} className="text-slate-600 text-sm flex gap-2"><span className="text-[#FF6B35] mt-0.5">·</span>{f}</li>)}
                          </ul>
                        </div>
                      )}
                      {release.security.length > 0 && (
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                            <Shield className="w-3.5 h-3.5 text-[#0A6E8A]" /> Security
                          </div>
                          <ul className="space-y-2">
                            {release.security.map((s) => <li key={s} className="text-slate-600 text-sm flex gap-2"><span className="text-[#0A6E8A] mt-0.5">🔒</span>{s}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
