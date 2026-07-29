import type { Metadata } from 'next'
import FaqContent from '@/components/FaqContent'

export const metadata: Metadata = {
  title: 'Home Care FAQ Halton | PHIPA, WSIB, PSW Questions — Maplepath',
  description: 'Honest answers to your questions about PSW services, PHIPA compliance, WSIB coverage, and how care starts within 24 hours in Halton Region.',
  alternates: { canonical: 'https://www.maplepathhealthcare.ca/faq/' },
  openGraph: { url: 'https://www.maplepathhealthcare.ca/faq/' },
}

export default function FAQPage() {
  return <FaqContent />
}
