'use client';

import { useState } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import ProfileSection from './components/ProfileSection';
import ClaimSection from './components/ClaimSection';
import AppsSection from './components/AppsSection';

export default function Home() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0b0f19] text-[#e2e8f0]">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <ProfileSection />
        </div>

        <div className="md:col-span-7 lg:col-span-8 flex flex-col space-y-6">
          <ClaimSection status={status} setStatus={setStatus} isLoading={isLoading} setIsLoading={setIsLoading} />
          <AppsSection />
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
