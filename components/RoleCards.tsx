'use client'

import { useState } from 'react'
import {
  Shield, Building, Phone, Stethoscope, Pill, FlaskConical,
  CheckCircle, BarChart3, Users, Calendar, Mic, Brain,
  Package, AlertTriangle, FileText, Clock, CreditCard,
  Settings, Globe, TestTube
} from 'lucide-react'

const roles = [
  {
    id: 'super-admin',
    icon: Shield,
    title: 'Super Admin',
    tagline: 'Command the entire network',
    color: '#4A6FA5',
    bg: '#EEF2FF',
    features: [
      { icon: Globe, text: 'Manage unlimited clinic branches from one dashboard' },
      { icon: Settings, text: 'Configure global system settings, roles, and permissions' },
      { icon: BarChart3, text: 'Cross-clinic analytics: revenue, patients, performance KPIs' },
      { icon: Users, text: 'Super-level staff management and access control' },
      { icon: FileText, text: 'System-wide audit logs and compliance reports' },
      { icon: Shield, text: 'Subscription management and billing oversight' },
    ],
  },
  {
    id: 'clinic-admin',
    icon: Building,
    title: 'Clinic Admin',
    tagline: 'Run your clinic end-to-end',
    color: '#0A6E8A',
    bg: '#E8F4FD',
    features: [
      { icon: Users, text: 'Manage consultants, staff salaries, and HR records' },
      { icon: CreditCard, text: 'Set consultation fees, discounts, and service charges' },
      { icon: Package, text: 'Pharmacy inventory — stock, purchase orders, suppliers' },
      { icon: TestTube, text: 'Lab test catalog with pricing and reference ranges' },
      { icon: BarChart3, text: 'Daily, monthly, and custom clinic performance reports' },
      { icon: FileText, text: 'Invoice management and financial reconciliation' },
    ],
  },
  {
    id: 'receptionist',
    icon: Phone,
    title: 'Receptionist',
    tagline: 'Streamline the front desk',
    color: '#00C9A7',
    bg: '#E8FDF6',
    features: [
      { icon: Users, text: 'Register new patients and update existing records instantly' },
      { icon: Calendar, text: 'Schedule appointments with smart slot management' },
      { icon: Clock, text: 'Manage live patient queue with token display board' },
      { icon: CreditCard, text: 'Process payments, refunds, and reprint receipts' },
      { icon: Phone, text: 'SMS and WhatsApp appointment reminders to patients' },
      { icon: FileText, text: 'Walk-in and pre-booked patient flow management' },
    ],
  },
  {
    id: 'doctor',
    icon: Stethoscope,
    title: 'Consultant (Doctor)',
    tagline: 'Prescribe smarter, faster',
    color: '#7C3AED',
    bg: '#F3F0FF',
    features: [
      { icon: Mic, text: 'Voice-powered prescriptions — speak and medicines auto-populate' },
      { icon: Brain, text: 'AI clinical suggestions for diagnoses, tests, and treatments' },
      { icon: FileText, text: 'Full patient history: past visits, Rx, labs, and vitals' },
      { icon: CheckCircle, text: 'Favourite medicines and treatment group protocols' },
      { icon: FileText, text: 'Similar Rx lookup — reuse prescriptions from past cases' },
      { icon: FileText, text: 'A4 printed prescriptions with Urdu patient instructions' },
    ],
  },
  {
    id: 'pharmacist',
    icon: Pill,
    title: 'Pharmacist',
    tagline: 'Dispense with confidence',
    color: '#FF6B35',
    bg: '#FFF3EE',
    features: [
      { icon: Package, text: 'Real-time inventory with low-stock alerts and reorder triggers' },
      { icon: CheckCircle, text: 'Dispense prescriptions with one-click verification' },
      { icon: AlertTriangle, text: 'Expiry date tracking with automated near-expiry alerts' },
      { icon: BarChart3, text: 'Sales reports, daily dispensing logs, and stock summaries' },
      { icon: Package, text: 'Batch and lot number management for traceability' },
      { icon: CreditCard, text: 'Integrated billing with Rx — zero double-entry' },
    ],
  },
  {
    id: 'lab',
    icon: FlaskConical,
    title: 'Lab Technician',
    tagline: 'Results ready before discharge',
    color: '#0891B2',
    bg: '#E0F7FA',
    features: [
      { icon: TestTube, text: 'Upload and link test results directly to patient records' },
      { icon: AlertTriangle, text: 'Automatic flagging of abnormal values in red/bold' },
      { icon: FileText, text: 'Configurable reference ranges by age, gender, and unit' },
      { icon: FileText, text: 'Formatted lab report PDFs ready for print or WhatsApp share' },
      { icon: Clock, text: 'Turnaround time tracking for lab workflow efficiency' },
      { icon: BarChart3, text: 'Pending test worklist with priority queue management' },
    ],
  },
]

export default function RoleCards() {
  const [active, setActive] = useState('doctor')

  const activeRole = roles.find((r) => r.id === active)!

  return (
    <section id="roles" className="section-pad bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F4FD] text-[#0A6E8A] text-sm font-semibold mb-4">
            Role-Based Access
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Every role. Every need.{' '}
            <span className="gradient-text">One platform.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Clynexis adapts to each team member's workflow. No irrelevant clutter — each user sees exactly what they need.
          </p>
        </div>

        {/* Role tab pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {roles.map((role) => {
            const Icon = role.icon
            const isActive = active === role.id
            return (
              <button
                key={role.id}
                onClick={() => setActive(role.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                  isActive
                    ? 'text-white shadow-md scale-105 border-transparent'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
                style={isActive ? { backgroundColor: role.color, borderColor: role.color } : {}}
              >
                <Icon className="w-4 h-4" />
                {role.title}
              </button>
            )
          })}
        </div>

        {/* Active role card */}
        <div
          className="rounded-3xl overflow-hidden shadow-card-hover transition-all duration-300"
          style={{ backgroundColor: activeRole.bg }}
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left panel */}
            <div
              className="lg:col-span-2 p-10 lg:p-12 flex flex-col justify-between"
              style={{ backgroundColor: activeRole.color }}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  {(() => { const Icon = activeRole.icon; return <Icon className="w-8 h-8 text-white" /> })()}
                </div>
                <h3 className="text-3xl font-black text-white mb-3">{activeRole.title}</h3>
                <p className="text-white/75 text-lg font-medium">{activeRole.tagline}</p>
              </div>

              <div className="mt-10 space-y-3">
                <div className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">Quick Stats</div>
                {[
                  { label: 'Avg. time saved', val: '2.4 hrs/day' },
                  { label: 'Error reduction', val: '87%' },
                  { label: 'User satisfaction', val: '4.9 / 5' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70 text-sm">{s.label}</span>
                    <span className="text-white font-bold text-sm">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel: features */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
                Key Capabilities
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {activeRole.features.map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 rounded-xl bg-white shadow-sm border border-white hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: activeRole.color + '18' }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: activeRole.color }} size={18} />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all btn-glow"
                  style={{ backgroundColor: activeRole.color }}
                >
                  See {activeRole.title} Demo
                  <CheckCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
