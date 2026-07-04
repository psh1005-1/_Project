export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* 배경 장식용 블러 원 */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center md:py-32">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-primary shadow-sm animate-fade-in">
          BEPA 청끌기업 데이터 × RAG 기반 매칭
        </span>

        <h1 className="animate-slide-up text-3xl font-bold leading-tight text-brand-navy sm:text-4xl md:text-5xl">
          부산 청년을 위한
          <br />
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            근거 있는 AI 기업 추천
          </span>
        </h1>

        <p className="mt-6 max-w-2xl animate-slide-up text-base text-slate-600 md:text-lg">
          청끌기업 데이터와 RAG 기술로, 나에게 맞는 기업과
          <br className="hidden sm:block" />
          그 이유까지 알려드려요.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-slide-up">
          <a
            href="#profile-form"
            className="rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-transform hover:scale-105 hover:bg-blue-700"
          >
            내 기업 추천받기
          </a>
          <a
            href="#pipeline"
            className="rounded-full border border-blue-200 bg-white px-8 py-3.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-blue-50"
          >
            추천 흐름 보기
          </a>
        </div>

        <div className="mt-16 grid w-full grid-cols-3 gap-4 rounded-2xl border border-blue-100 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
          <Stat value="500+" label="BEPA 청끌기업" />
          <Stat value="Top 5" label="맞춤 추천" />
          <Stat value="근거 기반" label="AI 설명" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-xl font-bold text-brand-navy sm:text-2xl">{value}</p>
      <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
    </div>
  )
}
