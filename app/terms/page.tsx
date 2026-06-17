import Link from 'next/link'

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: June 2025</p>

      <div className="prose prose-slate max-w-none">
        <p>
          By using Clynexis software and website, you agree to these Terms of Service. If you do not agree, please do not use our platform.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          These terms constitute a binding agreement between you and Clynexis Technologies Pvt. Ltd. ("we", "us", "our"). Using our service implies acceptance of all terms.
        </p>

        <h2>2. User Accounts</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You must notify us immediately of any unauthorised access.</li>
          <li>You agree to provide accurate and complete registration information.</li>
        </ul>

        <h2>3. Use of Service</h2>
        <ul>
          <li>You may use Clynexis only for lawful medical practice and clinic management.</li>
          <li>You must comply with all applicable healthcare regulations (e.g., HIPAA, GDPR, local data protection laws).</li>
          <li>You may not attempt to reverse‑engineer, copy, or resell the software.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, design, logos, and code are the exclusive property of Clynexis Technologies. You may not reproduce or distribute any part without prior written consent.
        </p>

        <h2>5. Payment and Subscription</h2>
        <ul>
          <li>Fees are charged monthly or annually as per your chosen plan.</li>
          <li>All fees are non‑refundable except as required by law.</li>
          <li>We reserve the right to change pricing with 30 days' notice.</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Clynexis shall not be liable for any indirect, incidental, or consequential damages arising from use of the software.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your account if you violate these terms. You may cancel your account at any time.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Rawalpindi.
        </p>

        <p className="mt-8">
          <Link href="/" className="text-[#00C9A7] hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  )
}