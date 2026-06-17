import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clynexis – Complete Clinic Management Software',
  description:
    'Clynexis is an all-in-one clinic management platform for Super Admins, Clinic Admins, Receptionists, Doctors, Pharmacists, and Lab Technicians. Voice-powered prescriptions, AI insights, and real-time reporting.',
  keywords: [
    'clinic management software',
    'hospital management system',
    'EMR software',
    'voice prescription',
    'AI medical software',
    'pharmacy management',
    'lab management',
  ],
  openGraph: {
    title: 'Clynexis – Complete Clinic Management Software',
    description:
      'One platform for your entire clinic. Voice prescriptions, AI suggestions, multi-branch support.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
