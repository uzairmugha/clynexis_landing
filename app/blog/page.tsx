'use client'

import PageShell from '@/components/PageShell'
import { ArrowRight, Clock, User } from 'lucide-react'
import Link from 'next/link'

const posts = [
  { slug: 'voice-prescription-saves-time', category: 'Product', title: 'How Voice Prescription Saves Doctors 45 Minutes Per Day', excerpt: 'We analysed 12,000 OPD sessions across 80 clinics. Here\'s what the data says about how voice input changes a doctor\'s day — and a patient\'s experience.', author: 'Dr. Sana Mirza', date: 'Jun 10, 2024', readTime: '6 min read', featured: true },
  { slug: 'clinic-digitisation-guide', category: 'Guide', title: 'The Complete Guide to Digitising a Paper-Based Clinic in 2024', excerpt: 'Step-by-step: how to move from paper registers to a fully digital clinic without disrupting operations or losing a single patient record.', author: 'Nadia Hussain', date: 'May 28, 2024', readTime: '12 min read', featured: false },
  { slug: 'ai-in-opd', category: 'Clinical', title: 'AI in the OPD: What Evidence-Based Suggestions Actually Mean', excerpt: 'Clinical decision support ≠ replacing the doctor. Here\'s exactly what our AI suggests, why, and what the literature says about its accuracy.', author: 'Dr. Sana Mirza', date: 'May 14, 2024', readTime: '8 min read', featured: false },
  { slug: 'multi-branch-management', category: 'Operations', title: 'Running 5 Clinics From One Screen: A Medical Director\'s Story', excerpt: 'Dr. Faisal Nawaz manages four branches. He used to spend every Friday visiting each one. Now he does it from his phone in 20 minutes.', author: 'Clynexis Team', date: 'Apr 30, 2024', readTime: '5 min read', featured: false },
  { slug: 'pharmacy-expiry-management', category: 'Pharmacy', title: 'How Automated Expiry Alerts Saved One Clinic ₨180,000 in a Year', excerpt: 'Dead stock and expired medicines are silent profit killers. Here\'s how systematic expiry tracking changes the economics of a pharmacy.', author: 'Hamid Qureshi', date: 'Apr 15, 2024', readTime: '4 min read', featured: false },
  { slug: 'lab-turnaround-time', category: 'Lab', title: 'Reducing Lab TAT from 4 Hours to 90 Minutes: A Case Study', excerpt: 'Al-Shifa Clinic reduced their average lab turnaround time by 62% in 6 weeks after implementing Clynexis lab module. Here\'s exactly how.', author: 'Usman Farooq', date: 'Mar 28, 2024', readTime: '7 min read', featured: false },
]

const categoryColors: Record<string, string> = {
  Product: '#7C3AED', Guide: '#0A6E8A', Clinical: '#0891B2',
  Operations: '#FF6B35', Pharmacy: '#00C9A7', Lab: '#4A6FA5',
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Clynexis Blog</h1>
          <p className="text-white/70 text-lg">Insights on clinic operations, clinical technology, and healthcare digitisation from the Clynexis team.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Featured */}
          <div className="mb-14 rounded-3xl overflow-hidden border border-slate-100 shadow-card-hover grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0D2F4F] to-[#0A6E8A] p-10 flex flex-col justify-between min-h-64">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: categoryColors[featured.category] + '30', color: 'white' }}>{featured.category}</span>
              <div>
                <h2 className="text-2xl font-black text-white mt-4 mb-3 leading-tight">{featured.title}</h2>
                <p className="text-white/65 text-sm leading-relaxed">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 mt-5 text-[#00C9A7] text-sm font-semibold hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-end bg-[#F8FCFF]">
              <div className="flex items-center gap-4 text-slate-400 text-xs mt-auto">
                <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</div>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</div>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>

          {/* Rest */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.slug} className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: categoryColors[post.category] + '15', color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
                  <h3 className="font-black text-slate-900 leading-snug mb-3">{post.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author.split(' ').slice(-1)}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-[#0A6E8A] font-semibold hover:text-[#00C9A7] transition-colors inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
