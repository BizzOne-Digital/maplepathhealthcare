export type KnowledgeEntry = {
  keywords: string[]
  question: string
  answer: string
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['quick', 'quickly', 'fast', 'start', 'begin', 'today', 'tonight', 'urgent', 'hours', '24'],
    question: 'How quickly can care start?',
    answer: 'Care begins within 24 hours of a confirmed assessment — guaranteed. For urgent situations like a hospital discharge or a recent fall, we do everything possible to arrange same-day care. Call 1-877-MAPLE13 any time, a real person answers 24/7.',
  },
  {
    keywords: ['wsib', 'insurance', 'insured', 'liability', 'injury', 'injured'],
    question: 'Are caregivers WSIB-covered?',
    answer: 'Yes. All Maplepath PSWs are fully enrolled in WSIB from day one, and we carry comprehensive organizational liability insurance. You bear zero financial exposure if a caregiver is injured in your home.',
  },
  {
    keywords: ['phipa', 'privacy', 'private', 'confidential', 'data', 'information protected'],
    question: 'How is health information protected?',
    answer: 'We operate in full compliance with PHIPA (Ontario\'s Personal Health Information Protection Act). Health information is used only to deliver care, stored securely, and never shared with a third party without your written consent.',
  },
  {
    keywords: ['contract', 'commitment', 'minimum', 'cancel', 'cancellation', 'lock in', 'obligation'],
    question: 'Is there a contract or minimum commitment?',
    answer: 'No long-term contracts. The minimum is a 3-hour visit, and you can start, pause, or cancel care at any time with reasonable notice — no penalties, no hidden exit conditions.',
  },
  {
    keywords: ['same caregiver', 'same psw', 'consistency', 'consistent', 'different person', 'change caregiver'],
    question: 'Will we get the same caregiver every visit?',
    answer: 'Yes. We assign one dedicated primary caregiver and maintain that relationship as the standard. If a change is ever needed, we notify you in advance and ensure a full briefing so nothing is lost.',
  },
  {
    keywords: ['ohip', 'funding', 'cost covered', 'government', 'lhin', 'ontario health at home', 'insurance cover', 'veterans', 'eap'],
    question: 'Is home care covered by OHIP or funding?',
    answer: 'OHIP does not cover private home care directly, but Ontario Health at Home (formerly CCAC/LHIN) may provide publicly funded support based on an assessment. Many families also use private insurance, veterans\' benefits, or Employee Assistance Programs. We help you navigate all funding options during your free assessment.',
  },
  {
    keywords: ['psw', 'nurse', 'difference', 'nursing', 'medical procedure', 'wound care', 'injection'],
    question: 'What\'s the difference between a PSW and a nurse?',
    answer: 'A PSW (Personal Support Worker) helps with daily activities — bathing, dressing, grooming, meal prep, medication reminders, mobility, and companionship — but does not perform medical procedures like wound care or injections. For nursing needs, we coordinate with visiting nurses through Ontario Health at Home.',
  },
  {
    keywords: ['meet', 'meet and greet', 'before start', 'match first', 'try'],
    question: 'Can I meet the caregiver before they start?',
    answer: 'Absolutely, we encourage it. Every new client gets a meet-and-greet between the assigned caregiver and your loved one before the first paid visit. If the match isn\'t right, we\'ll find someone better.',
  },
  {
    keywords: ['area', 'location', 'serve', 'coverage', 'oakville', 'burlington', 'milton', 'georgetown', 'halton', 'acton', 'waterdown', 'where'],
    question: 'What areas do you serve?',
    answer: 'We serve all of Halton Region — Oakville, Burlington, Milton, Georgetown, Halton Hills (our home base), Acton, Waterdown, and surrounding rural Halton communities. Not sure if you\'re covered? Call us and we\'ll find a way.',
  },
  {
    keywords: ['match', 'matching', 'choose caregiver', 'personality', 'language', 'compatible'],
    question: 'How do you match a caregiver?',
    answer: 'We carefully match caregivers based on personality, language preference, interests, and specific care needs — never just whoever is available. Getting the match right is one of the most important things we do.',
  },
  {
    keywords: ['price', 'pricing', 'cost', 'rate', 'fee', 'how much', 'per hour', 'per day'],
    question: 'How much does care cost?',
    answer: 'Companion Care starts at $28/hr, PSW Care (our most requested tier) starts at $34/hr, and 24-hour Live-In Care starts at $220/day. Exact rates are confirmed during your free assessment — no hidden fees, ever.',
  },
  {
    keywords: ['service', 'services', 'offer', 'provide', 'what do you do', 'help with'],
    question: 'What services do you offer?',
    answer: 'We provide Dementia & Alzheimer\'s Care, PSW & Personal Support, Palliative & End-of-Life Care, Overnight & 24-Hour Care, Post-Hospital Recovery, Companionship, Meal Preparation, Parkinson\'s & Neurological Care, and Medication Reminders. See the full list on our Services page.',
  },
  {
    keywords: ['dementia', 'alzheimer', 'memory'],
    question: 'Do you provide dementia care?',
    answer: 'Yes, dementia & Alzheimer\'s care is one of our specialties — specialized memory care at home that reduces anxiety and preserves routine.',
  },
  {
    keywords: ['palliative', 'end of life', 'hospice'],
    question: 'Do you provide palliative care?',
    answer: 'Yes, we offer palliative & end-of-life care focused on comfort, dignity, and peace at home, surrounded by family.',
  },
  {
    keywords: ['overnight', 'night', '24 hour', 'live in', 'live-in'],
    question: 'Do you offer overnight or 24-hour care?',
    answer: 'Yes, we offer overnight monitoring and full 24-hour / live-in care, ideal for advanced dementia, palliative care, or families worried about falls at night.',
  },
  {
    keywords: ['parkinson', 'neurological'],
    question: 'Do you support Parkinson\'s patients?',
    answer: 'Yes, we provide skilled, patient support for Parkinson\'s and other neurological conditions, focused on safe mobility and fall prevention.',
  },
  {
    keywords: ['hospital', 'discharge', 'recovery', 'post hospital', 'post-hospital'],
    question: 'Do you help after a hospital discharge?',
    answer: 'Yes, our Post-Hospital Recovery service bridges the gap between discharge and independence, helping prevent re-admission.',
  },
  {
    keywords: ['contact', 'phone', 'call', 'number', 'reach', 'get in touch'],
    question: 'How do I contact Maplepath?',
    answer: 'Call 1-877-MAPLE13 any time — a real person answers 24/7 — or fill out the free assessment form on our Contact page and a coordinator will call you back within 2 hours.',
  },
  {
    keywords: ['assessment', 'process', 'how it works', 'get started', 'sign up', 'steps'],
    question: 'How does the process work?',
    answer: 'Four steps: 1) You call or submit the form, 2) We do a free home assessment, 3) We match a compatible caregiver, 4) Care begins within 24 hours.',
  },
  {
    keywords: ['who', 'jasmine', 'director', 'owner', 'company', 'about'],
    question: 'Who runs Maplepath Healthcare?',
    answer: 'Jasmine is the Director of Maplepath Healthcare, with 5+ years of experience in client service and care coordination. She is multilingual (English, French, Persian, Hindi, Punjabi) and leads a locally operated agency based in Halton Hills, Ontario.',
  },
  {
    keywords: ['background check', 'verified', 'trust', 'vetted', 'screened'],
    question: 'Are caregivers background-checked?',
    answer: 'Yes, all PSWs are background-verified and certified before being matched with a family.',
  },
]

export const fallbackAnswer = 'I don\'t have that answer on hand, but our care coordinators do. Call 1-877-MAPLE13 (24/7, a real person answers) or request a free assessment and we\'ll call you back within 2 hours.'
