import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-6">Cookie Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: June 2025</p>

      <div className="prose prose-slate max-w-none">
        <p>
          This Cookie Policy explains how Clynexis uses cookies and similar tracking technologies on our website and application.
        </p>

        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device to help us provide a better experience. They remember your preferences and analyse how you use our site.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential:</strong> Necessary for login, security, and basic functionality.</li>
          <li><strong>Preferences:</strong> Remember your language and display settings.</li>
          <li><strong>Analytics:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
          <li><strong>Marketing:</strong> Used to deliver relevant ads (only if you opt‑in).</li>
        </ul>

        <h2>3. Your Control</h2>
        <p>
          You can manage cookies in your browser settings. Disabling essential cookies may affect site functionality.
        </p>

        <h2>4. Third‑Party Cookies</h2>
        <p>
          We use trusted partners like Google Analytics and Cloudflare, which may set their own cookies.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. We will notify you of significant changes via email or a banner on our site.
        </p>

        <p className="mt-8">
          <Link href="/" className="text-[#00C9A7] hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  )
}