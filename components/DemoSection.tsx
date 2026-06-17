'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Calendar, Clock, Headphones } from 'lucide-react'

export default function DemoSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [clinic, setClinic] = useState('')
  const [branches, setBranches] = useState('1 branch')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message
    const message = `Hello! I'm interested in Clynexis demo.
    
Name: ${name}
Phone: ${phone}
Email: ${email}
Clinic: ${clinic}
Branches: ${branches}

Please contact me to schedule a demo.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/923171973741?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    // Show thank you state (optional)
    setSubmitted(true)
  }

  return (
    <section id="demo" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D2F4F] via-[#0A3D5C] to-[#0A6E8A]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00C9A7] opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#4A6FA5] opacity-15 blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#00C9A7]/20 text-[#00C9A7] text-sm font-semibold mb-6 border border-[#00C9A7]/30">
                Ready to Transform Your Clinic?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Modernize your clinic{' '}
                <span className="text-[#00C9A7]">this week</span>
              </h2>
              <p className="mt-5 text-white/70 text-lg leading-relaxed">
                Join 500+ clinics that replaced paper registers, spreadsheets, and scattered tools with one unified system. Setup takes less than 24 hours.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Dedicated onboarding support included',
                  'Data migration from existing system',
                  'Live training for your entire team',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00C9A7] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Demo perks */}
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Calendar, label: '30 min', sub: 'Live demo' },
                  { icon: Clock, label: '< 24h', sub: 'Setup time' },
                  { icon: Headphones, label: '24/7', sub: 'Support' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={sub} className="flex items-center gap-3 p-3 rounded-xl bg-white/8 border border-white/10">
                    <Icon className="w-5 h-5 text-[#00C9A7]" />
                    <div>
                      <div className="text-white font-bold text-sm">{label}</div>
                      <div className="text-white/50 text-xs">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#00C9A7]/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-[#00C9A7]" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Thank you!</h3>
                  <p className="text-slate-500 text-sm">
                    Your demo request has been sent via WhatsApp. Our team will reach out shortly.
                  </p>
                  <p className="text-slate-400 text-xs mt-4">
                    Check your WhatsApp for confirmation.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Book Your Free Demo</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Fill in your details and we'll reach out immediately via WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Dr. Ahmed Khan"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent placeholder:text-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+92 300 0000000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourclinic.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent placeholder:text-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Clinic / Hospital Name</label>
                      <input
                        type="text"
                        value={clinic}
                        onChange={(e) => setClinic(e.target.value)}
                        placeholder="City Medical Centre"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent placeholder:text-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Number of Branches</label>
                      <select
                        value={branches}
                        onChange={(e) => setBranches(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent bg-white"
                      >
                        <option>1 branch</option>
                        <option>2–5 branches</option>
                        <option>6–20 branches</option>
                        <option>20+ branches</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold text-base transition-all btn-glow flex items-center justify-center gap-2 mt-2"
                    >
                      Book My Demo via WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-center text-slate-400 text-xs">
                      We'll contact you within 2 business hours. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}