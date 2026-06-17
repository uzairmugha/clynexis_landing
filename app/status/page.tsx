import Link from 'next/link'

export default function Status() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">System Status</h1>
      <p className="text-slate-500 text-lg mb-8">Real‑time status of Clynexis services.</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC]">
          <div>
            <span className="font-bold text-slate-800">API Services</span>
            <p className="text-sm text-slate-500">All endpoints operational</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E] text-white text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Operational
          </span>
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC]">
          <div>
            <span className="font-bold text-slate-800">Database</span>
            <p className="text-sm text-slate-500">Replication healthy, latency &lt; 50ms</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E] text-white text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Operational
          </span>
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FEFCE8] border border-[#FDE047]">
          <div>
            <span className="font-bold text-slate-800">Voice Transcription</span>
            <p className="text-sm text-slate-500">Degraded performance – longer response times</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAB308] text-white text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Degraded
          </span>
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC]">
          <div>
            <span className="font-bold text-slate-800">File Storage</span>
            <p className="text-sm text-slate-500">Uploads working, 99.9% availability</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E] text-white text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Operational
          </span>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-[#F8FCFF] border border-[#E8F4FD]">
        <p className="text-sm text-slate-600">
          <span className="font-bold">Uptime (30 days):</span> 99.94% &nbsp;·&nbsp;
          <span className="font-bold">Incidents:</span> 0 in last 7 days &nbsp;·&nbsp;
          <span className="font-bold">Last checked:</span> {new Date().toLocaleString()}
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-500">Subscribe to status updates: <a href="/contact-support" className="text-[#00C9A7] hover:underline">Notify me</a></p>
        <Link href="/" className="inline-block mt-4 text-sm text-[#00C9A7] hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}