'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Khalid Mehmood',
    role: 'Senior Consultant Physician',
    clinic: 'Al-Shifa Medical Centre, Lahore',
    avatar: 'KM',
    color: '#0A6E8A',
    rating: 5,
    quote:
      "The voice prescription feature alone saves me 45 minutes every day. I used to spend half my consultation time typing. Now I speak, the system fills the prescription, and I can focus entirely on my patient. The AI suggestions have already caught two potential drug interactions I might have missed. Absolutely game-changing.",
  },
  {
    name: 'Ms. Saima Tariq',
    role: 'Clinic Administrator',
    clinic: 'HealthFirst Family Clinic, Karachi',
    avatar: 'ST',
    color: '#7C3AED',
    rating: 5,
    quote:
      "Before Clynexis, our receptionist kept a physical register and our pharmacy ran on a spreadsheet. Within two weeks of going live, we eliminated double data entry, reduced billing errors to near-zero, and the daily reports automatically land in my WhatsApp by 8 PM. I can't imagine going back.",
  },
  {
    name: 'Dr. Faisal Nawaz',
    role: 'Medical Director',
    clinic: 'Prime Medical Group (4 Branches)',
    avatar: 'FN',
    color: '#FF6B35',
    rating: 5,
    quote:
      "Managing four branches was a logistical nightmare. Clynexis gives me a consolidated view across all locations in real-time. Each branch admin handles their own operations, but I can drill into any clinic's numbers, staff records, or pharmacy stock from a single dashboard. The multi-branch feature is exactly what a growing network needs.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF3EE] text-[#FF6B35] text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Loved by clinics{' '}
            <span className="gradient-text-warm">across the region</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Real feedback from doctors, admins, and clinic owners who've transformed their practice with Clynexis.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid lg:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center opacity-10"
                style={{ backgroundColor: t.color }}
              >
                <Quote className="w-5 h-5" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                  <div className="text-[#0A6E8A] text-xs font-medium mt-0.5">{t.clinic}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 p-8 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
          <div className="text-center">
            <div className="text-5xl font-black text-slate-900">4.9</div>
            <div className="flex gap-1 justify-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm text-slate-500 mt-1">Average rating</div>
          </div>
          <div className="w-px h-16 bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-black text-slate-900">98%</div>
            <div className="text-sm text-slate-500 mt-2">Would recommend to colleagues</div>
          </div>
          <div className="w-px h-16 bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-black text-slate-900">500+</div>
            <div className="text-sm text-slate-500 mt-2">Verified reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}
