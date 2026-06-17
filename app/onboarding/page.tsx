import Link from 'next/link'

export default function OnboardingGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Onboarding Guide</h1>
      <p className="text-slate-500 text-lg mb-8">Everything you need to set up Clynexis for your clinic.</p>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
          <h3 className="font-bold text-slate-800 mb-2">Step 1: Create Your Clinic Profile</h3>
          <p className="text-sm text-slate-500">Log in as Admin → Settings → Clinic Info. Enter your clinic name, address, logo, and contact details. This will appear on prescriptions and invoices.</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
          <h3 className="font-bold text-slate-800 mb-2">Step 2: Set Up Staff & Roles</h3>
          <p className="text-sm text-slate-500">Go to Staff Management → Add Staff. Assign roles (Doctor, Receptionist, Pharmacist, Lab Technician). Configure permissions and access levels.</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
          <h3 className="font-bold text-slate-800 mb-2">Step 3: Configure Consultation Fees</h3>
          <p className="text-sm text-slate-500">Navigate to Finance → Consultation Fees. Set the fee type (percentage or fixed) and the doctor/clinic share percentages.</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
          <h3 className="font-bold text-slate-800 mb-2">Step 4: Add Medicines & Lab Tests</h3>
          <p className="text-sm text-slate-500">Populate your pharmacy inventory (Pharmacy → Inventory) and lab test catalogue (Lab → Test Prices). You can bulk‑import using CSV.</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
          <h3 className="font-bold text-slate-800 mb-2">Step 5: Start Using Voice Prescription</h3>
          <p className="text-sm text-slate-500">Watch the quick video tutorial on the dashboard. Practice by speaking a simple prescription – the AI will guide you.</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-500">Need a walkthrough? <a href="/contact-support" className="text-[#00C9A7] hover:underline">Book a demo</a></p>
        <Link href="/" className="inline-block mt-4 text-sm text-[#00C9A7] hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}