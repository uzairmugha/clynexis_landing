import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: June 2025</p>

      <div className="prose prose-slate max-w-none">
        <p>
          Clynexis Technologies Pvt. Ltd. ("we", "our", "us") is committed to protecting the privacy of our users ("you", "your"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our clinic management software and website.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, clinic/hospital name, and payment details.</li>
          <li><strong>Patient Data:</strong> Medical records, prescriptions, lab results, and other health‑related information that you enter into the system.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our platform.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To process transactions and send invoices.</li>
          <li>To improve user experience and develop new features.</li>
          <li>To communicate with you about updates, promotions, and support.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement industry‑standard encryption (AES‑256) and secure servers to protect your data. Access to patient records is strictly role‑based and audited.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. Data may be shared with trusted third‑party service providers (e.g., payment gateways, cloud hosting) only to the extent necessary to operate our service. All processors are bound by confidentiality agreements.
        </p>

        <h2>5. Your Rights</h2>
        <ul>
          <li>Access, correct, or delete your personal data.</li>
          <li>Withdraw consent for marketing communications.</li>
          <li>Request a copy of your data in a portable format.</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:privacy@clynexis.com" className="text-[#00C9A7] hover:underline">privacy@clynexis.com</a>.</p>

        <h2>6. Cookies</h2>
        <p>
          We use cookies to remember your preferences and analyse site traffic. You can control cookie settings in your browser.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We will notify you of material changes via email or a prominent notice on our website.
        </p>

        <p className="mt-8">
          <Link href="/" className="text-[#00C9A7] hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  )
}