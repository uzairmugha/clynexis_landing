'use client'

import PageShell from '@/components/PageShell'
import Pricing from '@/components/Pricing'
import { Check, ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes — all plans include a 14-day free trial with full access to every feature. No credit card required to start.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.' },
  { q: 'What happens to my data if I cancel?', a: 'Your data remains accessible for 30 days after cancellation. You can export everything in standard formats (CSV, PDF) at any time.' },
  { q: 'Is there a per-patient or per-prescription fee?', a: 'No. Clynexis is a flat subscription — no per-patient, per-prescription, or per-transaction fees, ever.' },
  { q: 'Do you offer discounts for NGOs or public sector clinics?', a: 'Yes — we offer up to 50% discount for registered NGOs, government health facilities, and medical colleges. Contact sales for details.' },
  { q: 'What\'s included in onboarding?', a: 'Every plan includes data migration assistance, live training sessions for your staff, and a dedicated onboarding guide. Enterprise plans include on-site visits.' },
  { q: 'Can I have multiple clinics on one account?', a: 'Pro plans support up to 3 branches. For more branches, the Enterprise plan provides unlimited locations under a single Super Admin account.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfer, credit/debit cards, JazzCash, EasyPaisa, and monthly invoice billing for Enterprise customers.' },
]

export default function PricingPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">Simple, transparent pricing</h1>
          <p className="text-white/70 text-lg">No hidden fees. No per-patient charges. One flat rate for your whole team.</p>
        </div>
      </section>

      {/* Pricing component */}
      <Pricing />

      {/* Feature comparison table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 text-center mb-10">What's included in each plan</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8FCFF] border-b border-slate-200">
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">Feature</th>
                  {['Basic', 'Pro', 'Enterprise'].map((p) => (
                    <th key={p} className={`px-6 py-4 font-bold text-center ${p === 'Pro' ? 'text-[#7C3AED]' : 'text-slate-700'}`}>{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Patient Registration', true, true, true],
                  ['Appointment Scheduling', true, true, true],
                  ['Live Queue Management', true, true, true],
                  ['Manual Prescription Entry', true, true, true],
                  ['Voice Prescription (AI)', false, true, true],
                  ['AI Clinical Suggestions', false, true, true],
                  ['Medicine Groups & Protocols', false, true, true],
                  ['Similar Rx Lookup', false, true, true],
                  ['A4 Print + Urdu Advice', true, true, true],
                  ['Pharmacy Inventory', 'Basic', 'Full', 'Full'],
                  ['Lab Module', false, true, true],
                  ['Multi-Branch Dashboard', false, '3 branches', 'Unlimited'],
                  ['Super Admin Panel', false, false, true],
                  ['Custom Integrations / API', false, false, true],
                  ['White-Label Option', false, false, true],
                  ['Dedicated Account Manager', false, false, true],
                  ['Support Level', 'Email', 'Phone + Email', 'Dedicated SLA'],
                ].map(([feature, basic, pro, enterprise]) => (
                  <tr key={feature as string} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-700 font-medium">{feature}</td>
                    {[basic, pro, enterprise].map((val, i) => (
                      <td key={i} className="px-6 py-4 text-center">
                        {val === true ? <Check className="w-4 h-4 text-[#00C9A7] mx-auto" /> :
                         val === false ? <span className="text-slate-300 text-lg">—</span> :
                         <span className="text-slate-600 text-xs font-medium">{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F8FCFF]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-slate-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-semibold text-slate-900 text-sm pr-4">{q}</span>
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${open === i ? 'text-[#00C9A7]' : 'text-slate-300'}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start your 14-day free trial</h2>
          <p className="text-white/65 mb-8">No credit card. Full access. Your first demo is on us.</p>
          <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold transition-all btn-glow inline-flex items-center gap-2">
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
