'use client';

import { useState } from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import ProfileSection from '../components/ProfileSection';
import ClaimSection from '../components/ClaimSection';
import AppsSection from '../components/AppsSection';
import { SuccessModal } from '../components/Modals';

export default function Home() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSignIn = () => {
    // Implement sign-in logic here
    setIsModalOpen(false);
  };
  const handleClaim = async (walletAddress) => {
    if (!walletAddress) {
      setStatus('Please enter a wallet address');
      return;
    }
    setIsLoading(true);
    setStatus('');
    try {
      const res = await fetch('https://api.sidra.io/claim', {
        method: 'POST',
        body: JSON.stringify({ address: walletAddress })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Success! Tx: ' + data.txHash.slice(0, 10) + '…');
      } else {
        throw new Error(data.message || 'Error');
      }
    } catch (e) {
      setStatus(e.message);
    } finally {
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0b0f19] text-[#e2e8f0]">
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignIn={handleSignIn}
      />
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <ProfileSection />
        </div>

        <div className="md:col-span-7 lg:col-span-8 flex flex-col space-y-6  ">          <ClaimSection 
            handleClaim={handleClaim}
            isLoading={isLoading}
            status={status}
          />
          {/* <AppsSection /> */}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
