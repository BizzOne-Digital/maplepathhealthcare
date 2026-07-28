import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Areas We Serve | Home Care Across Halton Region — Maplepath Healthcare',
  description: 'Maplepath Healthcare serves Oakville, Burlington, Milton, Georgetown, Halton Hills, Acton, Waterdown and rural Halton with PSW and home care services.',
}

const areas = [
  { city: 'Oakville', desc: 'PSW, dementia, palliative & overnight care', services: ['PSW & Personal Support','Dementia Care','Palliative Care','Overnight & 24-Hour Care','Post-Hospital Recovery'], img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80' },
  { city: 'Burlington', desc: 'Full home care & specialist support', services: ['PSW & Personal Support','Parkinson\'s Care','Overnight Care','Companionship'], img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80' },
  { city: 'Milton', desc: 'PSW, companion & post-hospital care', services: ['PSW & Personal Support','Post-Hospital Recovery','Companionship'], img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80' },
  { city: 'Georgetown', desc: 'Home care & personal support', services: ['PSW & Personal Support','Dementia Care','Companionship'], img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&q=80' },
  { city: 'Halton Hills', desc: 'Our home base — every neighbourhood', services: ['All Services Available'], img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80' },
  { city: 'Acton', desc: 'PSW & elder support in Acton', services: ['PSW & Personal Support','Companionship'], img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80' },
  { city: 'Waterdown', desc: 'Compassionate care in Waterdown', services: ['PSW & Personal Support','Dementia Care'], img: 'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=400&q=80' },
  { city: 'Rural Halton', desc: 'Call us — we serve broadly', services: ['Call to confirm availability'], img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80' },
]

export default function CoveragePage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Where We Serve</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">Serving every community in Halton Region. Not sure if you're in our area? Call us — we'll find a way.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {areas.map((a, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="bg-white rounded-xl border-[1.5px] border-[rgba(42,67,115,.1)] overflow-hidden hover:border-[rgba(93,166,221,.4)] hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={a.img} alt={a.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#1C3162]/40 group-hover:bg-[#1C3162]/30 transition-all" />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-white/90 text-[#1C3162] text-[11px] font-bold px-2 py-1 rounded">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#5DA6DD"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                        {a.city === 'Halton Hills' ? 'Home Base' : 'Serving'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1C3162] mb-1">{a.city}</h3>
                    <p className="text-xs text-[#5C6B80] mb-2">{a.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {a.services.slice(0, 2).map(s => (
                        <span key={s} className="text-[10px] bg-[#EBF4FC] text-[#5DA6DD] px-2 py-0.5 rounded font-medium">{s}</span>
                      ))}
                      {a.services.length > 2 && <span className="text-[10px] bg-[#EBF4FC] text-[#5DA6DD] px-2 py-0.5 rounded font-medium">+{a.services.length - 2} more</span>}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="bg-[#EBF0F8] rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">Not sure if we cover your area?</h2>
            <p className="text-[#5C6B80] mb-5">Call us — our Halton team knows the area and will do everything possible to arrange care for your loved one, wherever they are in the region.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:18776275313" className="inline-flex items-center gap-2 px-7 py-3 bg-[#E0262E] text-white rounded font-bold hover:bg-[#C01E25] transition-all no-underline">Call 1-877-MAPLE13</a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#1C3162] text-[#1C3162] rounded font-bold hover:bg-[#1C3162] hover:text-white transition-all no-underline">Free Assessment →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
