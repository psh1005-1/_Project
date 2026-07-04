const PIPELINE_STEPS = [
  {
    step: '01',
    title: '기업 DB 구축',
    tags: ['Chunking', 'Embedding'],
    description:
      'BEPA 청끌기업 리스트, 기업 소개, 직무, 복지, 재무건전성, 채용 포인트를 텍스트로 정리하고 chunk 단위로 분할한 뒤 embedding을 생성해 vector DB(Chroma/FAISS)에 저장해요.',
  },
  {
    step: '02',
    title: '사용자 질의',
    tags: ['User Query'],
    description:
      '"핀테크 분야, 신입 개발자, 부산 거주, 금융IT 관심"처럼 희망 직무·관심 산업·기술 스택·근무지역·복지 선호·성장 가능성을 입력받아요.',
  },
  {
    step: '03',
    title: '벡터 검색 (Retrieval)',
    tags: ['Vector Search', 'Top-K'],
    description:
      '사용자 입력을 embedding으로 변환하고, vector DB에서 유사도가 높은 기업 Top-K를 검색해요. 검색 결과에는 similarity score, matching keywords, source chunks가 포함돼요.',
  },
  {
    step: '04',
    title: 'AI 추천 생성 (Generation)',
    tags: ['LLM', 'Generation'],
    description:
      'LLM이 Top-K 기업 정보와 사용자 프로필을 비교해 추천 순위, 추천 이유, 적합도, 보완할 역량, 지원 전략을 자연어로 생성해요. 근거 있는 추천이 바로 여기서 완성돼요.',
  },
]

export default function PipelineSection() {
  return (
    <section id="pipeline" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="서비스 흐름"
        title="기업 DB 구축부터 AI 추천 생성까지"
        description="잡아드림은 4단계 RAG 파이프라인으로 근거 있는 추천을 만들어요."
      />

      <div className="relative mt-14 grid gap-6 md:grid-cols-4">
        {/* 데스크톱 타임라인 연결선 */}
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-blue-100 via-brand-primary/30 to-blue-100 md:block" />

        {PIPELINE_STEPS.map((item) => (
          <div
            key={item.step}
            className="relative flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/50 transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
              {item.step}
            </span>
            <h3 className="mt-5 text-lg font-bold text-brand-navy">{item.title}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-brand-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">{eyebrow}</span>
      )}
      <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-sm text-slate-600 sm:text-base">{description}</p>}
    </div>
  )
}
