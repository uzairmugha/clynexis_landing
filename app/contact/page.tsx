'use client'

import { useState } from 'react'
import PageShell from '@/components/PageShell'
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, MessageSquare, Building2 } from 'lucide-react'

const offices = [
  { city: 'Rawalpindi', country: 'Pakistan', address: '3rd Floor, Arfa Software Technology Park, Lahore, Punjab 54000', phone: '+92 317 1973741', email: 'pk@clynexis.com' },
//   { city: 'Dubai', country: 'UAE', address: 'Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE', phone: '+971 4 000 0000', email: 'uae@clynexis.com' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [type, setType] = useState<'demo' | 'support' | 'sales'>('demo')

  // Form state
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [clinic, setClinic] = useState('')
  const [branches, setBranches] = useState('1 branch')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message
    let msg = `Hello Clynexis team! I have a ${type} inquiry.\n\n`
    msg += `Name: ${name}\n`
    msg += `Phone: ${phone}\n`
    msg += `Email: ${email}\n`
    if (clinic) msg += `Clinic: ${clinic}\n`
    if (type !== 'support') msg += `Branches: ${branches}\n`
    if (message) msg += `\nMessage: ${message}`

    const encoded = encodeURIComponent(msg)
    const whatsappUrl = `https://wa.me/923171973741?text=${encoded}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')

    // Show success state
    setSubmitted(true)

    // Optionally reset form after a delay? Not needed.
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Get in touch</h1>
          <p className="text-white/70 text-lg">Book a demo, ask a question, or just say hello. Our team responds within 2 business hours.</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 px-4 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: MessageSquare, title: 'Book a Demo', desc: 'See Clynexis live in 30 minutes', value: 'demo' },
            { icon: Building2, title: 'Sales Inquiry', desc: 'Enterprise & multi-branch plans', value: 'sales' },
            { icon: Phone, title: 'Support', desc: 'Existing customer? We\'re here.', value: 'support' },
          ].map(({ icon: Icon, title, desc, value }) => (
            <button
              key={title}
              onClick={() => setType(value as 'demo' | 'support' | 'sales')}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${type === value ? 'border-[#00C9A7] bg-[#E8FDF6]' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${type === value ? 'bg-[#00C9A7]' : 'bg-slate-100'}`}>
                <Icon className={`w-5 h-5 ${type === value ? 'text-white' : 'text-slate-500'}`} />
              </div>
              <div className={`font-bold text-sm ${type === value ? 'text-[#0A6E8A]' : 'text-slate-800'}`}>{title}</div>
              <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4 bg-[#F8FCFF]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-card border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#00C9A7]/15 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-[#00C9A7]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Thank you!</h3>
                <p className="text-slate-500">Your inquiry has been sent via WhatsApp. Our team will reach out shortly.</p>
                <p className="text-slate-400 text-sm mt-2">Check your WhatsApp for confirmation.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-black text-slate-900 mb-1">
                  {type === 'demo' ? 'Book Your Free Demo' : type === 'sales' ? 'Talk to Sales' : 'Contact Support'}
                </h2>
                <p className="text-slate-500 text-sm mb-6">Fill out the form and we'll connect via WhatsApp.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. Ahmed Khan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] placeholder:text-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Work Email *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@clinic.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Clinic / Organization</label>
                    <input
                      type="text"
                      value={clinic}
                      onChange={(e) => setClinic(e.target.value)}
                      placeholder="City Medical Centre"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] placeholder:text-slate-300"
                    />
                  </div>
                  {type !== 'support' && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Number of Branches</label>
                      <select
                        value={branches}
                        onChange={(e) => setBranches(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] bg-white"
                      >
                        <option>1 branch</option>
                        <option>2–5 branches</option>
                        <option>6–20 branches</option>
                        <option>20+ branches</option>
                      </select>
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={type === 'support' ? 'Describe your issue in detail...' : 'Anything specific you\'d like to see in the demo?'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] placeholder:text-slate-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold text-sm transition-all btn-glow flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-black text-slate-900 text-lg mb-4">Response times</h3>
              <div className="space-y-3">
                {[
                  { label: 'Demo requests', time: 'Within 2 hours', color: '#00C9A7' },
                  { label: 'Sales inquiries', time: 'Same business day', color: '#0A6E8A' },
                  { label: 'Support tickets', time: '< 4 hours (Pro/Enterprise)', color: '#7C3AED' },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center p-4 rounded-xl bg-white border border-slate-100">
                    <span className="text-slate-600 text-sm">{r.label}</span>
                    <span className="text-sm font-bold" style={{ color: r.color }}>{r.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card">
                  <div className="font-bold text-slate-900 mb-1">{office.city}, {office.country}</div>
                  <div className="space-y-2 mt-3">
                    <div className="flex gap-2 text-slate-500 text-sm"><MapPin className="w-4 h-4 text-[#0A6E8A] flex-shrink-0 mt-0.5" />{office.address}</div>
                    <div className="flex gap-2 text-slate-500 text-sm"><Phone className="w-4 h-4 text-[#0A6E8A]" />{office.phone}</div>
                    <div className="flex gap-2 text-slate-500 text-sm"><Mail className="w-4 h-4 text-[#0A6E8A]" />{office.email}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#E8F4FD] border border-[#0A6E8A]/10">
              <Clock className="w-5 h-5 text-[#0A6E8A]" />
              <div className="text-sm text-slate-600">Office hours: Mon–Sat, 9 AM – 7 PM PKT</div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}