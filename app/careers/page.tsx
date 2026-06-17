'use client'

import PageShell from '@/components/PageShell'
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe, Users } from 'lucide-react'
import Link from 'next/link'

const openings = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Lahore / Remote', type: 'Full-time', tags: ['Next.js', 'Node.js', 'PostgreSQL'] },
  { title: 'Clinical Product Manager', dept: 'Product', location: 'Lahore', type: 'Full-time', tags: ['Healthcare', 'Agile', 'EMR'] },
  { title: 'Customer Success Manager', dept: 'Customer Success', location: 'Lahore / Dubai', type: 'Full-time', tags: ['SaaS', 'Healthcare', 'Onboarding'] },
  { title: 'Mobile Engineer (React Native)', dept: 'Engineering', location: 'Remote', type: 'Full-time', tags: ['React Native', 'iOS', 'Android'] },
  { title: 'Medical Content Writer', dept: 'Marketing', location: 'Remote', type: 'Contract', tags: ['MBBS preferred', 'English/Urdu', 'Healthcare'] },
  { title: 'Sales Executive — UAE Market', dept: 'Sales', location: 'Dubai', type: 'Full-time', tags: ['B2B SaaS', 'Healthcare', 'Arabic a plus'] },
]

const perks = [
  { icon: Heart, title: 'Health Coverage', desc: 'Full medical, dental, and vision for you and your family.' },
  { icon: Zap, title: 'Learning Budget', desc: '₨60,000/year for courses, conferences, and certifications.' },
  { icon: Globe, title: 'Remote-Friendly', desc: 'Flexible remote policy — most roles are hybrid or fully remote.' },
  { icon: Users, title: 'Mission-Driven Team', desc: 'Work alongside people who genuinely care about healthcare outcomes.' },
]

export default function CareersPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/20">We're Hiring</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Help us fix healthcare,<br /><span className="text-[#00C9A7]">one clinic at a time</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">We're a 60-person team that ships fast, cares deeply, and believes software can genuinely improve people's health outcomes.</p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
              <div className="w-10 h-10 rounded-xl bg-[#E8F4FD] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#0A6E8A]" />
              </div>
              <div className="font-bold text-slate-900 text-sm mb-1">{title}</div>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 px-4 bg-[#F8FCFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-8">Open positions ({openings.length})</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-slate-900">{job.title}</div>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-slate-500 text-sm">{job.dept}</span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500 text-sm"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500 text-sm"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-[#E8F4FD] text-[#0A6E8A] text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="flex-shrink-0 px-5 py-2.5 rounded-xl border-2 border-[#0A6E8A] text-[#0A6E8A] text-sm font-semibold hover:bg-[#0A6E8A] hover:text-white transition-all inline-flex items-center gap-2">
                  Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-500 text-sm text-center">Don't see the right role? <Link href="/contact" className="text-[#0A6E8A] font-medium hover:underline">Send us your CV anyway</Link> — we're always looking for exceptional people.</p>
        </div>
      </section>
    </PageShell>
  )
}
