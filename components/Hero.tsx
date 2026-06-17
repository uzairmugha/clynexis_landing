'use client'

import { Play, ArrowRight, Mic, Brain, BarChart3, Users, Calendar, Pill } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-mesh min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#00C9A7] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#0A6E8A] opacity-10 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-white opacity-3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00C9A7] pulse-dot" />
              Trusted by 500+ Clinics Across Pakistan & UAE
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Complete Clinic{' '}
                <span className="block text-[#00C9A7]">Management</span>
                Software
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg">
                One platform for Super Admin, Clinic Admin, Reception, Doctors, Pharmacy, and Lab.
                Voice‑powered prescriptions, AI insights, and real‑time reporting — all in one system.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold text-base transition-all btn-glow shadow-lg"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                Watch Overview
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { val: '500+', label: 'Clinics' },
                { val: '50k+', label: 'Patients' },
                { val: '98%', label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-[#00C9A7]">{s.val}</div>
                  <div className="text-sm text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-float">
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl">
              {/* Mockup header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 bg-white/20 rounded-md h-6 flex items-center px-3">
                  <span className="text-white/60 text-xs">app.clynexis.com/dashboard</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="bg-[#0D2F4F] rounded-xl overflow-hidden">
                {/* Top stats bar */}
                <div className="grid grid-cols-4 gap-2 p-3">
                  {[
                    { icon: Users, label: 'Patients Today', val: '124', color: '#00C9A7' },
                    { icon: Calendar, label: 'Appointments', val: '38', color: '#4A6FA5' },
                    { icon: Pill, label: 'Rx Issued', val: '91', color: '#FF6B35' },
                    { icon: BarChart3, label: 'Revenue', val: '₨84k', color: '#0A6E8A' },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="bg-white/8 rounded-lg p-2 text-center">
                      <div className="flex justify-center mb-1">
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <div className="text-white text-sm font-bold">{val}</div>
                      <div className="text-white/40 text-[9px] leading-tight mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Main content area */}
                <div className="grid grid-cols-5 gap-2 px-3 pb-3">
                  {/* Patient queue */}
                  <div className="col-span-2 bg-white/5 rounded-lg p-2.5">
                    <div className="text-white/60 text-[10px] font-medium mb-2 uppercase tracking-wide">Live Queue</div>
                    {[
                      { name: 'Ahmad Raza', token: 'T-04', status: 'In Room' },
                      { name: 'Fatima K.', token: 'T-05', status: 'Waiting' },
                      { name: 'Usman Ali', token: 'T-06', status: 'Waiting' },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${i === 0 ? 'bg-[#00C9A7] text-white' : 'bg-white/10 text-white/60'}`}>
                            {p.token.split('-')[1]}
                          </div>
                          <span className="text-white/80 text-[10px]">{p.name}</span>
                        </div>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${i === 0 ? 'bg-[#00C9A7]/20 text-[#00C9A7]' : 'bg-white/10 text-white/40'}`}>
                          {p.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Prescription area */}
                  <div className="col-span-3 bg-white/5 rounded-lg p-2.5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white/60 text-[10px] font-medium uppercase tracking-wide">Voice Prescription</div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-400/30">
                        <Mic className="w-2.5 h-2.5 text-red-400" />
                        <span className="text-red-300 text-[9px] font-medium">Live</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { med: 'Amoxicillin 500mg', dose: '1-0-1 × 7 days' },
                        { med: 'Paracetamol 500mg', dose: '1-1-1 SOS' },
                        { med: 'ORS Sachet', dose: '3x daily in water' },
                      ].map((rx, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5">
                          <span className="text-white/80 text-[10px] font-medium">{rx.med}</span>
                          <span className="text-[#00C9A7] text-[9px]">{rx.dose}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded px-2 py-1.5">
                      <Brain className="w-3 h-3 text-[#00C9A7]" />
                      <span className="text-[#00C9A7] text-[9px]">AI: Consider CBC for fever &gt;3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 text-white shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00C9A7]/20 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-[#00C9A7]" />
                </div>
                <div>
                  <div className="text-xs font-bold">Voice Rx Active</div>
                  <div className="text-[10px] text-white/60">Urdu instructions generated</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 text-white shadow-xl">
              <div className="text-xs font-bold text-[#00C9A7]">AI Suggestion</div>
              <div className="text-[10px] text-white/70 mt-0.5">Lab: Typhoid PCR recommended</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
