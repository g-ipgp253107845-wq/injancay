/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DefinitionsSection } from './components/DefinitionsSection';
import { GuidesSection } from './components/GuidesSection';
import { ThreatsInfographic } from './components/ThreatsInfographic';
import { GoldenRulesPoster } from './components/GoldenRulesPoster';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { ReferencesAndClosing } from './components/ReferencesAndClosing';

export default function App() {
  const [highlightedTab, setHighlightedTab] = useState<'netiket' | 'keselamatan' | null>('netiket');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <HeroSection onFocusDefinition={setHighlightedTab} />
        <DefinitionsSection
          highlightedTab={highlightedTab}
          onSelectTab={setHighlightedTab}
        />
        <GuidesSection />
        <ThreatsInfographic />
        <GoldenRulesPoster />
        <InteractiveQuiz />
        <ReferencesAndClosing />
      </main>
    </div>
  );
}
