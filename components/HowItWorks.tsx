'use client'

import { UserPlus, Mic, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Register Patient & Queue',
    description:
      'The receptionist registers the patient in under 60 seconds — or they walk in and get queued instantly. Appointment slot management, token generation, and SMS confirmation happen automatically.',
    color: '#0A6E8A',
    details: ['Patient registration', 'Token & queue management', 'Appointment scheduling', 'SMS reminders sent'],
  },
  {
    number: '02',
    icon: Mic,
    title: 'Voice Prescription & Diagnosis',
    description:
      'The doctor opens the OPD screen, speaks the prescription in natural language. AI populates medicines, suggests tests, and generates Urdu instructions for the patient — all in under 3 minutes.',
    color: '#7C3AED',
    details: ['Voice → medicine table', 'AI clinical suggestions', 'Lab test orders', 'A4 Rx with Urdu advice'],
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Print, Dispense & Analytics',
    description:
      'Pharmacy dispenses directly from the e-prescription. Lab uploads results with auto-flagging. Admin reviews real-time revenue, patient volume, and staff performance from any device.',
    color: '#00C9A7',
    details: ['Pharmacy dispensing', 'Lab result upload', 'Revenue reports', 'Multi-branch dashboard'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F4FD] text-[#0A6E8A] text-sm font-semibold mb-4">
            Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            From patient arrival to{' '}
            <span className="gradient-text">analytics — in minutes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Clynexis replaces a stack of disjointed tools with one seamless flow across every department.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#0A6E8A] via-[#7C3AED] to-[#00C9A7] opacity-20" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Arrow between steps (mobile) */}
                  {i < 2 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                    {/* Step number + icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: step.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span
                        className="text-5xl font-black opacity-10 leading-none"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{step.description}</p>

                    {/* Detail list */}
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-slate-600">
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: step.color + '20' }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: step.color }}
                            />
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Time savings callout */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {[
            { val: '< 60s', label: 'Patient registration time' },
            { val: '< 3 min', label: 'Complete OPD consultation' },
            { val: 'Real-time', label: 'Analytics and reporting' },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl border border-[#E8F4FD] bg-white">
              <div className="text-3xl font-black gradient-text">{s.val}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
