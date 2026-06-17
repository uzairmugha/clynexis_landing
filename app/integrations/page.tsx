'use client'

import PageShell from '@/components/PageShell'
import { ArrowRight, Zap, Code, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const integrations = [
  { category: 'Communication', items: [
    { name: 'WhatsApp Business', desc: 'Send appointment reminders, prescriptions, and lab results directly to patients via WhatsApp.', status: 'Live' },
    { name: 'SMS Gateway (Twilio)', desc: 'Automated SMS for appointment confirmations, queue alerts, and payment receipts.', status: 'Live' },
    { name: 'Email (SendGrid)', desc: 'Branded email notifications for appointments, reports, and billing.', status: 'Live' },
  ]},
  { category: 'Payments', items: [
    { name: 'JazzCash', desc: 'Accept mobile wallet payments at reception. Automatic reconciliation in Clynexis finance module.', status: 'Live' },
    { name: 'EasyPaisa', desc: 'Seamless EasyPaisa integration for patient billing and pharmacy payments.', status: 'Live' },
    { name: 'Stripe', desc: 'Credit and debit card payments for clinics serving international patients.', status: 'Live' },
    { name: 'Bank Transfer (1Link)', desc: 'Local bank transfer via 1Link for corporate and insurance clients.', status: 'Coming Soon' },
  ]},
  { category: 'Diagnostics & Lab', items: [
    { name: 'DHIS2', desc: 'Push patient encounter data to national health information systems for government clinics.', status: 'Live' },
    { name: 'HL7 / FHIR', desc: 'Standard healthcare data exchange with external labs and hospital systems.', status: 'Live' },
    { name: 'Agappe Instruments', desc: 'Direct result import from Agappe analyzers to the Clynexis lab module.', status: 'Beta' },
  ]},
  { category: 'Accounting', items: [
    { name: 'QuickBooks Online', desc: 'Sync daily clinic revenue, expenses, and payroll data automatically.', status: 'Coming Soon' },
    { name: 'Xero', desc: 'Export invoices and financial summaries to Xero for multi-entity accounting.', status: 'Coming Soon' },
  ]},
]

export default function IntegrationsPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/20">Integrations & API</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Connect Clynexis to<br /><span className="text-[#00C9A7]">the tools you already use</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">WhatsApp, payment gateways, lab analysers, accounting software — Clynexis plugs in without disrupting your existing workflow.</p>
        </div>
      </section>

      {/* Integration grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-14">
          {integrations.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#E8F4FD] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#0A6E8A]" />
                </span>
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(({ name, desc, status }) => (
                  <div key={name} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-card-hover transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-bold text-slate-900">{name}</div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${status === 'Live' ? 'bg-[#E8FDF6] text-[#00C9A7]' : status === 'Beta' ? 'bg-[#FFF3EE] text-[#FF6B35]' : 'bg-slate-100 text-slate-400'}`}>
                        {status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API section */}
      <section className="py-20 px-4 bg-[#F8FCFF]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3"><Code className="w-5 h-5 text-[#0A6E8A]" /><span className="text-[#0A6E8A] font-semibold text-sm uppercase tracking-widest">REST API</span></div>
            <h2 className="text-3xl font-black text-slate-900 mb-5">Build on top of Clynexis</h2>
            <p className="text-slate-500 leading-relaxed mb-5">Our RESTful API gives Enterprise customers full programmatic access to patient records, appointments, prescriptions, and reports. Build custom integrations, reporting dashboards, or connect with your existing HIS.</p>
            <ul className="space-y-3">
              {['OAuth 2.0 authentication', 'Rate-limited at 1,000 req/min', 'Full OpenAPI / Swagger documentation', 'Webhook support for real-time events', 'Sandbox environment available'].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-[#00C9A7]" />{f}</li>
              ))}
            </ul>
            <div className="flex gap-3 mt-7">
              <Link href="/docs" className="px-5 py-3 rounded-xl bg-[#0D2F4F] text-white font-semibold text-sm inline-flex items-center gap-2 hover:bg-[#0A3D5C] transition-all">
                View API Docs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-5 py-3 rounded-xl border-2 border-[#0A6E8A] text-[#0A6E8A] font-semibold text-sm hover:bg-[#E8F4FD] transition-all">
                Request Access
              </Link>
            </div>
          </div>
          <div className="bg-[#0D2F4F] rounded-2xl p-6 font-mono text-sm shadow-xl">
            <div className="text-[#00C9A7] mb-2 text-xs">GET /api/v1/patients/RX-00291</div>
            <pre className="text-white/80 text-xs leading-relaxed overflow-x-auto">{`{
  "id": "RX-00291",
  "name": "Ahmad Raza",
  "dob": "1988-04-12",
  "last_visit": "2024-06-10",
  "prescriptions": [
    {
      "date": "2024-06-10",
      "doctor": "Dr. Khalid",
      "medicines": [
        {
          "name": "Amoxicillin 500mg",
          "dose": "1-0-1",
          "days": 7
        }
      ],
      "urdu_advice": "دوائی کھانے کے بعد لیں"
    }
  ]
}`}</pre>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A]">
        <div className="max-w-xl mx-auto text-center">
          <Shield className="w-10 h-10 text-[#00C9A7] mx-auto mb-4" />
          <h2 className="text-2xl font-black text-white mb-3">Need a custom integration?</h2>
          <p className="text-white/65 mb-6 text-sm">Our team has built bespoke integrations with HIS systems, lab analysers, biometric attendance, and more. Tell us what you need.</p>
          <Link href="/contact" className="px-7 py-3.5 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold text-sm inline-flex items-center gap-2 transition-all btn-glow">
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
