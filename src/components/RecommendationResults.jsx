import { forwardRef } from 'react'
import { SectionHeading } from './PipelineSection'
import RecommendationCard from './RecommendationCard'

const RecommendationResults = forwardRef(function RecommendationResults({ status, recommendations }, ref) {
  return (
    <section ref={ref} id="recommendation-results" className="bg-brand-bg px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI 추천 결과"
          title="회원님을 위한 맞춤 기업 Top 5"
          description="벡터 검색으로 찾은 유사 기업을 LLM이 비교 분석해 추천 이유까지 설명해드려요."
        />

        <div className="mt-12">
          {status === 'idle' && <EmptyState />}
          {status === 'loading' && <LoadingState />}
          {status === 'done' && recommendations.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((company, index) => (
                <RecommendationCard key={company.id} company={company} rank={index + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

export default RecommendationResults

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-dashed border-blue-200 bg-white/60 px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">🔍</div>
      <p className="mt-4 text-sm font-semibold text-brand-navy sm:text-base">
        조건을 입력하면 추천 결과가 표시됩니다.
      </p>
      <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
        위 사용자 질의 폼을 채우고 "내 기업 추천받기"를 눌러보세요.
      </p>
    </div>
  )
}

function LoadingState() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-blue-100 bg-white px-6 py-16 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
        <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-brand-primary border-t-transparent" />
      </div>
      <p className="mt-4 text-sm font-semibold text-brand-navy sm:text-base">
        기업 데이터를 검색하고 있어요…
      </p>
      <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
        벡터 DB에서 유사 기업을 찾고, AI가 추천 이유를 생성하는 중이에요.
      </p>
    </div>
  )
}
