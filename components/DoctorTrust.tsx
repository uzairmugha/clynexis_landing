'use client'

import { CheckCircle, GraduationCap, Building2, Award, Activity, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const credentials = [
  { icon: GraduationCap, title: 'Ayub Medical College', sub: 'M.B.B.S. · 2005–2006', color: '#0A6E8A' },
  { icon: Building2, title: 'Aga Khan University Hospital', sub: 'Post-grad neurosurgery training', color: '#7C3AED' },
  { icon: Award, title: 'F.C.P.S. Neurosurgery', sub: 'Awarded 2014', color: '#00C9A7' },
  { icon: Activity, title: 'Spinal & Cranial Surgery', sub: 'Simple & complex procedures', color: '#FF6B35' },
]

const stats = [
  { value: 'Under 15 Min', label: 'Average wait time', icon: Clock },
  { value: '13 Years', label: 'Clinical experience', icon: Award },
]

export default function DoctorTrust() {
  return (
    <section className="section-pad bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F4FD] text-[#0A6E8A] text-sm font-semibold mb-4">
            <Activity className="w-3.5 h-3.5" />
            Built by Doctors, Trusted by Experts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
            Designed alongside <span className="gradient-text">real clinicians</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Clynexis is shaped by the feedback of experienced specialists who use it every day.
          </p>
        </div>

        {/* Card: image left, data right */}
        <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-card-hover bg-white grid lg:grid-cols-[420px_1fr]">

          {/* ── LEFT: Photo ── */}
          <div className="relative min-h-[460px] lg:min-h-full bg-[#0D2F4F] overflow-hidden">
            {/* Placeholder photo — replace src with actual image path */}
            <Image
              src="/doctor.jpeg"
              alt="Dr. Muhammad Mehboob Alam — Consultant Neurosurgeon"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Dark gradient overlay at bottom for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2F4F] via-[#0D2F4F]/30 to-transparent" />

            {/* Name + title overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C9A7]/20 border border-[#00C9A7]/30 text-[#00C9A7] text-xs font-semibold mb-3">
                <CheckCircle className="w-3 h-3" />
                Verified Specialist
              </div>
              <h3 className="text-white font-black text-xl leading-tight">
                Dr. Muhammad Mehboob Alam
              </h3>
              <p className="text-[#00C9A7] text-sm font-semibold mt-1">
                Consultant Neurosurgeon
              </p>
              <p className="text-white/55 text-xs mt-1">
                M.B.B.S. · F.C.P.S. (Neurosurgery)
              </p>

              {/* Stats row */}
              <div className="flex gap-3 mt-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-3">
                    <div className="text-[#00C9A7] font-black text-base leading-tight">{value}</div>
                    <div className="text-white/45 text-[10px] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Hospital tag */}
              <div className="mt-3 inline-flex items-center gap-1.5 text-white/50 text-xs bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">
                <Building2 className="w-3 h-3" />
                POF Hospital, Wah Cantt
              </div>
            </div>
          </div>

          {/* ── RIGHT: Data only ── */}
          <div className="p-8 lg:p-12 flex flex-col gap-6 justify-center">

            {/* Opening quote */}
            <div className="text-7xl text-[#E8F4FD] font-serif leading-none select-none -mb-4">"</div>

            {/* Bio paragraphs */}
            <div className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Dr. Alam is a Consultant Neurosurgeon and Assistant Professor at POF Hospital, Wah Cantt.
                He graduated from Ayub Medical College (2005–06) and completed his post-graduation training
                at the Aga Khan University Hospital — one of Pakistan's premier university hospitals —
                earning his FCPS in Neurosurgery in 2014.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                With hands-on expertise in complex spinal and cranial procedures, Dr. Alam joined POF
                Hospital in July 2015, where he is actively building the Neurosurgery Department with
                equal focus on clinical excellence, research, and training the next generation of surgeons.
              </p>
            </div>

            <div className="border-t border-slate-100" />

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map(({ icon: Icon, title, sub, color }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FCFF] border border-[#E8F4FD] hover:shadow-card transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: color + '18' }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">{title}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100" />

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white text-sm font-semibold transition-all btn-glow"
              >
                See how Clynexis helps specialists
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#0A6E8A] text-[#0A6E8A] text-sm font-semibold hover:bg-[#E8F4FD] transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Fallback note for dev: place doctor.jpg in /public folder */}
      </div>
    </section>
  )
}