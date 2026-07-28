import type { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy & PHIPA Compliance — Maplepath Healthcare Ontario',
  description: "Maplepath Healthcare's full PHIPA compliance statement, privacy policy, WSIB coverage details, and terms of service for home care in Ontario.",
  alternates: { canonical: 'https://maplepathhealthcare.vercel.app/privacy/' },
  openGraph: { url: 'https://maplepathhealthcare.vercel.app/privacy/' },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
