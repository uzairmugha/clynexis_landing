import Link from 'next/link'

export default function ApiDocs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">API Documentation</h1>
      <p className="text-slate-500 text-lg mb-8">Integrate Clynexis with your own systems using our RESTful API.</p>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Authentication</h3>
          <p className="text-sm text-slate-500">All endpoints require an API key. Include it in the header: <code className="bg-slate-100 px-2 py-0.5 rounded">X-API-Key: your_key</code></p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Base URL</h3>
          <p className="text-sm text-slate-500"><code className="bg-slate-100 px-2 py-0.5 rounded">https://api.clynexis.com/v1</code></p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Endpoints</h3>
          <ul className="text-sm text-slate-500 space-y-1">
            <li><span className="font-mono text-slate-700">GET /patients</span> – List all patients</li>
            <li><span className="font-mono text-slate-700">POST /patients</span> – Create a new patient</li>
            <li><span className="font-mono text-slate-700">GET /appointments</span> – List appointments</li>
            <li><span className="font-mono text-slate-700">POST /prescriptions</span> – Submit a prescription</li>
            <li><span className="font-mono text-slate-700">GET /reports/summary</span> – Fetch clinic summary</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Rate Limits</h3>
          <p className="text-sm text-slate-500">1000 requests per hour per API key. Contact support for higher limits.</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Example Request</h3>
          <pre className="bg-slate-900 text-white p-4 rounded-xl text-xs overflow-x-auto">
{`curl -X GET https://api.clynexis.com/v1/patients \\
  -H "X-API-Key: your_api_key"`}
          </pre>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-500">For full API reference, <a href="/contact-support" className="text-[#00C9A7] hover:underline">contact our team</a></p>
        <Link href="/" className="inline-block mt-4 text-sm text-[#00C9A7] hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}