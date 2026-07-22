'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { knowledgeBase, fallbackAnswer } from './chatbotKnowledge'

type Message = { role: 'user' | 'bot'; text: string }

const suggestedQuestions = [
  'How much does care cost?',
  'How quickly can care start?',
  'What areas do you serve?',
  'Is home care covered by OHIP?',
]

function findAnswer(input: string): string {
  const text = input.toLowerCase()
  let bestScore = 0
  let bestAnswer = ''

  for (const entry of knowledgeBase) {
    let score = 0
    for (const keyword of entry.keywords) {
      if (text.includes(keyword)) score += keyword.split(' ').length
    }
    if (score > bestScore) {
      bestScore = score
      bestAnswer = entry.answer
    }
  }

  return bestScore > 0 ? bestAnswer : fallbackAnswer
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [showMenu, setShowMenu] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi, I'm the Maplepath care assistant. Ask me about services, pricing, coverage areas, or how care works — or call 1-877-MAPLE13 any time." },
  ])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, open, showMenu])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    const answer = findAnswer(trimmed)
    setMessages(m => [...m, { role: 'user', text: trimmed }, { role: 'bot', text: answer }])
    setInput('')
    setShowMenu(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#1C3162] text-white flex items-center justify-center hover:scale-105 transition-all"
        style={{ boxShadow: '0 6px 30px rgba(28,49,98,.45)' }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 left-6 z-50 w-[92vw] max-w-[360px] h-[520px] max-h-[75vh] bg-white rounded-2xl border border-[rgba(42,67,115,.15)] flex flex-col overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,.25)' }}
        >
          <div className="bg-[#1C3162] px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#A8D5C8"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Maplepath Care Assistant</div>
              <div className="text-white/60 text-xs flex items-center gap-1.5">
                <span className="live-dot" />
                Answers from our website
              </div>
            </div>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F7FAFD]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed ${
                    m.role === 'user' ? 'bg-[#5DA6DD] text-white rounded-br-sm' : 'bg-white border border-[rgba(42,67,115,.1)] text-[#2A3A5C] rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {showMenu ? (
              <div className="flex flex-col gap-2 pt-1">
                {suggestedQuestions.map(q => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-left text-[12.5px] px-3 py-2 rounded-lg bg-white border border-[rgba(42,67,115,.15)] text-[#1C3162] hover:border-[#5DA6DD] transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            ) : (
              messages.length > 1 && (
                <button
                  onClick={() => setShowMenu(true)}
                  className="flex items-center gap-1.5 text-[12.5px] font-semibold px-3 py-2 rounded-lg bg-white border border-[rgba(42,67,115,.15)] text-[#1C3162] hover:border-[#5DA6DD] transition-all w-fit"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                  Back to questions
                </button>
              )
            )}
          </div>

          <div className="p-3 border-t border-[rgba(42,67,115,.1)] bg-white">
            <div className="flex items-center gap-2 mb-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send(input) }}
                placeholder="Ask a question..."
                className="flex-1 text-[13px] px-3 py-2.5 rounded-lg border border-[rgba(42,67,115,.2)] outline-none focus:border-[#5DA6DD] text-[#1C3162]"
              />
              <button
                onClick={() => send(input)}
                aria-label="Send message"
                className="w-9 h-9 rounded-lg bg-[#1C3162] flex items-center justify-center flex-shrink-0 hover:bg-[#2A4373] transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
              </button>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#5C6B80]">
              <span>Need a person? </span>
              <div className="flex gap-2">
                <a href="tel:18776275313" className="font-bold text-[#E0262E] no-underline">Call Us</a>
                <Link href="/contact" className="font-bold text-[#5DA6DD] no-underline">Free Assessment →</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
