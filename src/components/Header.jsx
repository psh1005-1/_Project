import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: '홈', to: '/', isPage: true },
  { label: '추천받기', to: '/#profile-form' },
  { label: '기업 탐색', to: '/#recommendation-results' },
  { label: '마이페이지', comingSoon: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState(null) // 'bell' | 'login' | null

  function handlePlaceholderClick(kind) {
    setNotice((prev) => (prev === kind ? null : kind))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-lg font-bold text-white shadow-sm">
            잡
          </span>
          <span className="text-lg font-bold text-brand-navy">잡아드림</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) =>
            link.comingSoon ? (
              <button
                key={link.label}
                type="button"
                onClick={() => handlePlaceholderClick('mypage')}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-primary"
              >
                {link.label}
              </button>
            ) : link.isPage ? (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-primary ${
                    isActive ? 'text-brand-primary' : 'text-slate-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => handlePlaceholderClick('bell')}
              aria-label="알림"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-blue-50 hover:text-brand-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>
            {notice === 'bell' && (
              <div className="absolute right-0 top-12 w-56 rounded-xl border border-blue-100 bg-white p-3 text-left text-xs text-slate-500 shadow-lg animate-fade-in">
                아직 새로운 알림이 없어요.
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => handlePlaceholderClick('login')}
              className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-transform hover:scale-105 hover:bg-blue-700"
            >
              로그인
            </button>
            {notice === 'login' && (
              <div className="absolute right-0 top-12 w-64 rounded-xl border border-blue-100 bg-white p-3 text-left text-xs text-slate-500 shadow-lg animate-fade-in">
                데모 버전에서는 로그인 없이 바로 추천 기능을 체험할 수 있어요.
              </div>
            )}
          </div>
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
          {NAV_LINKS.map((link) =>
            link.comingSoon ? (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  handlePlaceholderClick('mypage')
                }}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-brand-primary"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ),
          )}
          <button
            type="button"
            onClick={() => handlePlaceholderClick('login')}
            className="mt-2 rounded-full bg-brand-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            로그인
          </button>
          {notice === 'login' && (
            <p className="px-3 pt-2 text-xs text-slate-500">
              데모 버전에서는 로그인 없이 바로 추천 기능을 체험할 수 있어요.
            </p>
          )}
        </nav>
      )}
    </header>
  )
}
