import { useRef, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PipelineSection from './components/PipelineSection'
import UserProfileForm from './components/UserProfileForm'
import RecommendationResults from './components/RecommendationResults'
import RagExplainSection from './components/RagExplainSection'
import TechStackSection from './components/TechStackSection'
import { getRecommendations } from './services/recommendationApi'

export default function App() {
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'done'
  const [recommendations, setRecommendations] = useState([])
  const resultsRef = useRef(null)

  async function handleProfileSubmit(profile) {
    setStatus('loading')
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const results = await getRecommendations(profile)
    setRecommendations(results)
    setStatus('done')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PipelineSection />
        <UserProfileForm onSubmit={handleProfileSubmit} isLoading={status === 'loading'} />
        <RecommendationResults ref={resultsRef} status={status} recommendations={recommendations} />
        <RagExplainSection />
        <TechStackSection />
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-10 text-center">
      <p className="text-sm font-bold text-brand-navy">잡아드림 (Job-a-Dream)</p>
      <p className="mt-1 text-xs text-slate-400">BEPA 청끌기업 데이터 기반 RAG 취업 매칭 서비스 · 해커톤 데모</p>
    </footer>
  )
}
