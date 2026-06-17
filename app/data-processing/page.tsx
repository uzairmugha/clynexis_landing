import Link from 'next/link'

export default function DataProcessing() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Data Processing Agreement</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: June 2025</p>

      <div className="prose prose-slate max-w-none">
        <p>
          This Data Processing Agreement (DPA) is part of our Terms of Service and outlines how Clynexis processes personal and patient data on your behalf.
        </p>

        <h2>1. Data Processor Role</h2>
        <p>
          Clynexis acts as a data processor for the personal data you upload. You remain the data controller, responsible for lawful collection and consent.
        </p>

        <h2>2. Types of Data Processed</h2>
        <ul>
          <li>Patient demographics (name, contact details, insurance).</li>
          <li>Clinical records (diagnoses, prescriptions, lab reports).</li>
          <li>Billing and payment information.</li>
        </ul>

        <h2>3. Purposes of Processing</h2>
        <ul>
          <li>To provide the clinic management services.</li>
          <li>To generate reports and analytics.</li>
          <li>To ensure security and compliance.</li>
        </ul>

        <h2>4. Security Measures</h2>
        <p>
          We employ encryption, access controls, and regular vulnerability assessments. All data is stored in secure Tier‑III data centres.
        </p>

        <h2>5. Sub‑processors</h2>
        <p>
          We may use third‑party sub‑processors (e.g., cloud providers) to deliver our service. All processors are vetted and bound by GDPR‑compliant contracts.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          Data is retained for as long as your account is active, or as required by law. You may request deletion of specific records at any time.
        </p>

        <h2>7. Data Subject Rights</h2>
        <p>
          We assist you in fulfilling data subject requests (access, correction, deletion) as required by applicable law.
        </p>

        <p className="mt-8">
          <Link href="/" className="text-[#00C9A7] hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  )
}