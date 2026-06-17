'use client'

import { useState } from 'react'
import { Check, Zap, Building2, Globe } from 'lucide-react'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    icon: Building2,
    price: { monthly: '₨9,999', annual: '₨7,999' },
    tagline: 'For single-branch clinics getting started',
    color: '#0A6E8A',
    highlight: false,
    features: [
      'Up to 2 clinic users',
      'Patient registration & queue',
      'Manual prescription entry',
      'Pharmacy inventory (basic)',
      'Daily reports & invoicing',
      'WhatsApp receipt sharing',
      'Standard support (email)',
      '1 clinic branch',
    ],
    missing: ['Voice prescription', 'AI clinical suggestions', 'Multi-branch dashboard'],
    cta: 'Start Free Trial',
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Zap,
    price: { monthly: '₨24,999', annual: '₨19,999' },
    tagline: 'Best for established clinics that want AI-powered care',
    color: '#7C3AED',
    highlight: true,
    features: [
      'Unlimited clinic users',
      'Voice-powered prescriptions',
      'AI clinical suggestions',
      'Medicine groups & protocols',
      'Similar Rx & patient history',
      'A4 print with Urdu advice',
      'Full pharmacy & lab modules',
      'Advanced analytics & reports',
      'Priority support (phone + email)',
      'Up to 3 clinic branches',
    ],
    missing: [],
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Globe,
    price: { monthly: 'Custom', annual: 'Custom' },
    tagline: 'For hospital groups and multi-location networks',
    color: '#0D2F4F',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited clinic branches',
      'Super Admin central dashboard',
      'Custom integrations & API',
      'Dedicated account manager',
      'On-site training & onboarding',
      'Custom report builder',
      'SLA-backed 99.9% uptime',
      'Data migration assistance',
      'White-label option available',
    ],
    missing: [],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="section-pad bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8FDF6] text-[#00C9A7] text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Plans that scale with{' '}
            <span className="gradient-text">your clinic</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            No hidden charges. No per-patient fees. One flat subscription covers your entire team.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-[#00C9A7]' : 'bg-slate-200'}`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${annual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-400'}`}>
              Annual{' '}
              <span className="ml-1 px-2 py-0.5 rounded-full bg-[#00C9A7]/15 text-[#00C9A7] text-xs font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-7 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'pricing-card-pro shadow-2xl scale-105 bg-white z-10'
                    : 'bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#7C3AED] text-white text-xs font-bold whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: plan.color + '18' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                </div>

                <p className="text-slate-500 text-sm mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-slate-900">
                      {plan.price.monthly === 'Custom' ? 'Custom' : annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Custom' && (
                      <span className="text-slate-400 text-sm mb-1">/month</span>
                    )}
                  </div>
                  {annual && plan.price.monthly !== 'Custom' && (
                    <p className="text-[#00C9A7] text-xs font-semibold mt-1">Billed annually · Save 20%</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-[#00C9A7] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300 line-through">
                      <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center">—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#demo"
                  className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.highlight
                      ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white btn-glow'
                      : 'border-2 hover:text-white transition-all'
                  }`}
                  style={
                    !plan.highlight
                      ? {
                          borderColor: plan.color,
                          color: plan.color,
                          '--hover-bg': plan.color,
                        } as React.CSSProperties
                      : {}
                  }
                  onMouseEnter={(e) => {
                    if (!plan.highlight) {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.backgroundColor = plan.color
                      el.style.color = 'white'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlight) {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.backgroundColor = 'transparent'
                      el.style.color = plan.color
                    }
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-slate-400 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="#demo" className="text-[#0A6E8A] hover:underline font-medium">
            Questions? Talk to us →
          </a>
        </p>
      </div>
    </section>
  )
}
