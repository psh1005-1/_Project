import { SectionHeading } from './PipelineSection'

const TECH_GROUPS = [
  { label: 'Frontend', items: ['React', 'Tailwind CSS'], icon: '🖥️' },
  { label: 'AI Pipeline', items: ['Python', 'LangChain'], icon: '🧠' },
  { label: 'Vector DB', items: ['Chroma', 'FAISS'], icon: '🗂️' },
  { label: 'LLM API', items: ['OpenAI API', 'Claude API'], icon: '✨' },
  { label: 'Backend (예정)', items: ['REST API', 'fetch 기반 연동'], icon: '🔗' },
]

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="bg-brand-bg px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="기술 스택" title="잡아드림을 이루는 기술" description="해커톤 데모는 아래 스택으로 구성돼요." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_GROUPS.map((group) => (
            <div
              key={group.label}
              className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-2xl">{group.icon}</span>
              <h3 className="mt-3 text-sm font-bold text-brand-navy sm:text-base">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-brand-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
