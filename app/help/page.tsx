import Link from 'next/link'

export default function HelpCenter() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Help Center</h1>
      <p className="text-slate-500 text-lg mb-8">Find answers to common questions and get started with Clynexis.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-2">How do I register a patient?</h3>
          <p className="text-sm text-slate-500">Go to Reception → Register Patient. Fill in the required fields and save.</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-2">How does voice prescription work?</h3>
          <p className="text-sm text-slate-500">Open the OPD screen, click the microphone icon, and speak the prescription. The AI will parse medicines, dosage, and frequency.</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-2">How do I print a prescription?</h3>
          <p className="text-sm text-slate-500">After saving the prescription, click the "Print" button. A PDF preview will open; you can print or download it.</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-2">What is the refund process?</h3>
          <p className="text-sm text-slate-500">Reception can request a refund. The doctor reviews and approves it. The status updates automatically.</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-2">How do I add a new medicine?</h3>
          <p className="text-sm text-slate-500">Go to Pharmacy → Inventory → Add New Medicine. Fill in the details and save.</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-2">Can I use Clynexis offline?</h3>
          <p className="text-sm text-slate-500">Currently, Clynexis requires an internet connection. Offline mode is planned for future releases.</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-500">Still have questions? <a href="/contact-support" className="text-[#00C9A7] hover:underline">Contact Support</a></p>
        <Link href="/" className="inline-block mt-4 text-sm text-[#00C9A7] hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}