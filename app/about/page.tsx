'use client'

import PageShell from '@/components/PageShell'
import { Heart, Target, Users, Globe, Award, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
  { icon: Heart, title: 'Patient-First Design', desc: 'Every feature we build starts with one question: does this help the patient get better care, faster?' },
  { icon: Target, title: 'Precision Engineering', desc: 'Healthcare demands zero tolerance for errors. Our QA process mirrors the standards of the clinics we serve.' },
  { icon: Globe, title: 'Local Context, Global Standards', desc: 'Built in Pakistan, adopted across the UAE — we deeply understand the regional clinical workflow while meeting international compliance.' },
  { icon: Zap, title: 'Speed Without Compromise', desc: "A doctor's time is a patient's lifeline. Every millisecond we save in the software translates to better care at the bedside." },
]

const team = [
  { name: 'Dr. Sana Mirza', role: 'Co-Founder & CEO', bg: '#0A6E8A', initials: 'SM', bio: 'MBBS, 8 years in internal medicine. Left clinical practice to solve the operational chaos she lived every day.' },
  { name: 'Hamid Qureshi', role: 'Co-Founder & CTO', bg: '#7C3AED', initials: 'HQ', bio: '12 years in healthcare SaaS. Previously led engineering at a Lahore-based HIS company serving 40+ hospitals.' },
  { name: 'Nadia Hussain', role: 'Head of Product', bg: '#00C9A7', initials: 'NH', bio: 'Former hospital administrator. Translated 5 years of front-desk frustration into Clynexis\'s reception module.' },
  { name: 'Usman Farooq', role: 'Head of Customer Success', bg: '#FF6B35', initials: 'UF', bio: 'Onboarded over 300 clinics personally. Knows every pain point by name — and has solved most of them.' },
]

const milestones = [
  { year: '2019', event: 'Founded in a Lahore co-working space with a paper prototype and 3 beta clinics.' },
  { year: '2020', event: 'Launched v1.0. First 50 paying clinics. Survived the pandemic by going remote-first.' },
  { year: '2021', event: 'Introduced voice prescription — the feature that changed everything. Waitlist grew 10× in 60 days.' },
  { year: '2022', event: 'Expanded to UAE. First enterprise contract signed with a 6-branch hospital group in Dubai.' },
  { year: '2023', event: 'Crossed 300 clinics. Launched AI clinical suggestions module in partnership with local medical colleges.' },
  { year: '2024', event: '500+ clinics. 50,000+ patients managed monthly. Series A closed. Team grew to 60 people.' },
]

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/20">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            We built what we wished<br />
            <span className="text-[#00C9A7]">existed when we were clinicians</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Clynexis was born from a doctor's frustration — paper registers, scattered spreadsheets, and a 45-minute OPD that should have taken 15. We built the software we always needed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#00C9A7] font-semibold text-sm uppercase tracking-widest">Our Mission</span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-5 leading-tight">
              Make clinic operations invisible so healthcare can be human again
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              When admin runs smoothly, doctors think. When doctors think, patients heal. Our mission is to eliminate every second of unnecessary friction between a patient walking in and walking out healthier.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We're a team of clinicians, engineers, and former hospital administrators who have lived the problem from every angle. That's why Clynexis feels different — it's built from the inside out.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { val: '500+', label: 'Clinics Trust Us' },
              { val: '50k+', label: 'Patients Monthly' },
              { val: '60', label: 'Team Members' },
              { val: '2', label: 'Countries' },
            ].map((s) => (
              <div key={s.label} className="p-7 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD] text-center">
                <div className="text-4xl font-black gradient-text">{s.val}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#F8FCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900">What we stand for</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Our values aren't wall art — they're the criteria we use to make every product and hiring decision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-card border border-slate-100 hover:shadow-card-hover transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4FD] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#0A6E8A]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900">Our journey so far</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A6E8A] to-[#00C9A7]" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 pl-14 relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0D2F4F] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold leading-tight text-center">
                    {year}
                  </div>
                  <div className="bg-[#F8FCFF] border border-[#E8F4FD] rounded-xl p-5 flex-1">
                    <p className="text-slate-700 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-[#F8FCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900">The people behind Clynexis</h2>
            <p className="text-slate-500 mt-3">Clinicians, engineers, and operators who've been in your shoes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-7 shadow-card border border-slate-100 text-center hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: member.bg }}>
                  {member.initials}
                </div>
                <div className="font-bold text-slate-900">{member.name}</div>
                <div className="text-[#0A6E8A] text-sm font-medium mt-0.5 mb-3">{member.role}</div>
                <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/65 mb-8">Whether you're a clinic owner, a curious engineer, or a potential partner — we'd love to talk.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-4 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold transition-all btn-glow inline-flex items-center gap-2">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/careers" className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition-all">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
