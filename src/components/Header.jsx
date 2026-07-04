import { useState } from 'react'

const NAV_LINKS = [
  { label: '서비스 흐름', href: '#pipeline' },
  { label: '추천받기', href: '#profile-form' },
  { label: 'RAG 차별점', href: '#rag-explain' },
  { label: '기술 스택', href: '#tech-stack' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-lg font-bold text-white shadow-sm">
            잡
          </span>
          <span className="text-lg font-bold text-brand-navy">잡아드림</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#profile-form"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-transform hover:scale-105 hover:bg-blue-700"
          >
            내 기업 추천받기
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 md:hidden"
          aria-label="메뉴 열기"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-5 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#profile-form"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-brand-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            내 기업 추천받기
          </a>
        </nav>
      )}
    </header>
  )
}
