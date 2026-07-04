import { SectionHeading } from './PipelineSection'

export default function RagExplainSection() {
  return (
    <section id="rag-explain" className="bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="RAG 차별점"
          title="단순 추천이 아니라, 근거를 보여주는 추천"
          description="협업 필터링(Collaborative Filtering)과 비교하면 잡아드림의 차이가 분명해져요."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ComparisonCard
            tone="muted"
            title="협업 필터링"
            subtitle="비슷한 사용자의 선택 기반"
            steps={['비슷한 사용자 그룹 찾기', '그 그룹이 선택한 기업 집계', '통계적으로 인기 있는 기업 노출']}
            limitation="“왜 추천됐는지”를 설명하기 어렵고, 데이터가 적은 신생 기업·소수 사용자에겐 취약해요."
          />
          <ComparisonCard
            tone="brand"
            title="RAG 추천 (잡아드림)"
            subtitle="실제 기업 문서 검색 + LLM 설명 생성"
            steps={['사용자 질의 embedding', 'vector DB에서 관련 기업 문서 Top-K 검색', 'LLM이 검색 결과 근거로 추천 이유 생성']}
            limitation="검색된 실제 문서(chunk)를 근거로 제시하기 때문에 추천 사유를 구체적으로 설명할 수 있어요."
            highlight
          />
        </div>

        {/* 간단한 구조 다이어그램 */}
        <div className="mt-14 rounded-3xl border border-blue-100 bg-brand-bg/60 p-6 sm:p-10">
          <p className="text-center text-sm font-bold text-brand-navy">잡아드림 RAG 구조 한눈에 보기</p>
          <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
            <DiagramNode label="사용자 질의" detail="관심 산업 · 직무 · 지역 · 복지" />
            <Arrow />
            <DiagramNode label="Embedding" detail="질의를 벡터로 변환" />
            <Arrow />
            <DiagramNode label="Vector DB 검색" detail="Top-K 유사 기업 chunk" />
            <Arrow />
            <DiagramNode label="LLM 생성" detail="추천 이유 · 지원 전략 설명" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({ title, subtitle, steps, limitation, tone, highlight }) {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${
        highlight ? 'border-brand-primary bg-blue-50/60 shadow-md shadow-blue-100' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <h3 className={`text-lg font-bold ${tone === 'brand' ? 'text-brand-navy' : 'text-slate-700'}`}>{title}</h3>
      <p className="mt-1 text-xs text-slate-500 sm:text-sm">{subtitle}</p>

      <ol className="mt-5 space-y-2.5">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-2.5 text-xs text-slate-600 sm:text-sm">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                highlight ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <p className="mt-5 rounded-xl bg-white/70 p-3 text-xs leading-relaxed text-slate-600">{limitation}</p>
    </div>
  )
}

function DiagramNode({ label, detail }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-xl border border-blue-100 bg-white px-4 py-4 text-center shadow-sm">
      <p className="text-xs font-bold text-brand-navy sm:text-sm">{label}</p>
      <p className="mt-1 text-[11px] text-slate-500">{detail}</p>
    </div>
  )
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-brand-primary md:rotate-0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-90 md:rotate-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  )
}
