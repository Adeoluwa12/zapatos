'use client';

import { useState } from 'react';
import LandingHero from '@/components/landing-hero';
import ShoeForm from '@/components/shoe-form';
import RecommendationsDisplay from '@/components/recommendations-display';

type AppState = 'landing' | 'form' | 'recommendations';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [recommendations, setRecommendations] = useState('');

  const handleFormSuccess = (recs: string) => {
    setRecommendations(recs);
    setAppState('recommendations');
  };

  const handleReset = () => {
    setRecommendations('');
    setAppState('landing');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {appState === 'landing' && (
        <LandingHero onGetStarted={() => setAppState('form')} />
      )}
      {appState === 'form' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center p-4 py-12">
          <ShoeForm onSuccess={handleFormSuccess} />
        </div>
      )}
      {appState === 'recommendations' && (
        <RecommendationsDisplay
          recommendations={recommendations}
          onReset={handleReset}
        />
      )}
    </main>
  );
}
