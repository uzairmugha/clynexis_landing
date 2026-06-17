'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Building2, Users, ThumbsUp, Award } from 'lucide-react'

const stats = [
  { icon: Building2, value: '500+', label: 'Clinics Onboarded', color: '#0A6E8A' },
  { icon: Users, value: '50k+', label: 'Patients Managed', color: '#00C9A7' },
  { icon: ThumbsUp, value: '98%', label: 'Customer Satisfaction', color: '#FF6B35' },
  { icon: Star, value: '4.9', label: 'Average Rating', color: '#4A6FA5' },
]

const logos = ['City Hospital', 'MedCare Plus', 'Al-Shifa Clinic', 'HealthFirst', 'Prime Medical', 'CarePoint']

export default function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={label}
              className={`text-center p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD] hover:shadow-card transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: color + '15' }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">{value}</div>
              <div className="text-sm text-slate-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by logos strip */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-6">
            Trusted by leading healthcare providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {logos.map((name) => (
              <div
                key={name}
                className="px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-sm font-semibold hover:border-[#0A6E8A] hover:text-[#0A6E8A] transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Certification badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: Award, label: 'HIPAA Compliant', sub: 'Data Protection' },
            { icon: Star, label: 'ISO 27001', sub: 'Certified' },
            { icon: ThumbsUp, label: '99.9% Uptime', sub: 'SLA Guaranteed' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#E8F4FD] bg-[#F8FCFF]">
              <Icon className="w-4 h-4 text-[#0A6E8A]" />
              <div>
                <span className="text-sm font-bold text-slate-700">{label}</span>
                <span className="text-xs text-slate-400 ml-1">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
