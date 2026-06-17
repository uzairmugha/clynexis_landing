import Link from 'next/link'

export default function ContactSupport() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Contact Support</h1>
      <p className="text-slate-500 text-lg mb-8">We're here to help. Reach out to us through any of the channels below.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">📧 Email Support</h3>
          <p className="text-sm text-slate-500">For general queries, billing, and technical issues:</p>
          <a href="mailto:support@clynexis.com" className="block mt-2 text-[#00C9A7] hover:underline">support@clynexis.com</a>
          <p className="text-xs text-slate-400 mt-1">Response time: 2‑4 hours</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">📞 Phone Support</h3>
          <p className="text-sm text-slate-500">Urgent matters or account issues:</p>
          <a href="tel:+923171973741" className="block mt-2 text-[#00C9A7] hover:underline">+92 317 1973741</a>
          <p className="text-xs text-slate-400 mt-1">Available: 9AM – 9PM (PKT), Mon‑Sat</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">💬 Live Chat</h3>
          <p className="text-sm text-slate-500">Chat with our team directly from the app:</p>
          <button className="mt-2 px-5 py-2 rounded-xl bg-[#00C9A7] text-white font-semibold hover:bg-[#00b394] transition">
            Start Chat
          </button>
          <p className="text-xs text-slate-400 mt-1">Available: 9AM – 6PM (PKT)</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">📝 On‑site Support</h3>
          <p className="text-sm text-slate-500">For enterprise clients, we offer on‑site training and support.</p>
          <a href="/onboarding" className="inline-block mt-2 text-[#00C9A7] hover:underline">Request on‑site visit</a>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-[#F8FCFF] border border-[#E8F4FD]">
        <h3 className="font-bold text-slate-800 text-center mb-4">Send us a message</h3>
        <form className="max-w-md mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Your Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent outline-none" placeholder="you@yourclinic.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Subject</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent outline-none" placeholder="Briefly describe your issue" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent outline-none" placeholder="Tell us how we can help..."></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-[#00C9A7] hover:bg-[#00b394] text-white font-bold transition">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-[#00C9A7] hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}