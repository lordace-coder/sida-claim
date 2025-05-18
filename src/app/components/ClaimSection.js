'use client';
import { useState } from 'react';

export default function ClaimSection() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClaim = async () => {
    setIsLoading(true);
    setStatus('');
    try {
      const res = await fetch('https://api.sidra.io/claim', {
        method: 'POST'
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
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-lg p-6 space-y-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Wallet Overview</h3>
        <button className="p-2 hover:bg-white/10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </button>
      </div>
      
      {/* Daily Tokens */}
      <div className="flex justify-between items-center bg-white/5 rounded-lg p-4">
        <div>
          <p className="text-xs text-gray-400">Daily Tokens</p>
          <p className="font-semibold text-lg">0 <span className="text-gray-400 text-sm">ST</span></p>
        </div>
        <button
          onClick={handleClaim}
          disabled={isLoading}
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-piPurple to-piCyan disabled:opacity-50"
        >
          {isLoading ? 'Claiming...' : 'Claim Tokens'}
        </button>
      </div>

      {/* Balance */}
      <div className="flex justify-between items-center bg-white/5 rounded-lg p-4">
        <div>
          <p className="text-xs text-gray-400">Balance</p>
          <p className="font-semibold text-lg">0.00 <span className="text-gray-400 text-sm">SDA</span></p>
          <p className="text-[10px] text-gray-500">≈ $0.00 USD</p>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5m0 0h5m-5 0l7-7m9 9v5m0 0h-5m5 0l-7 7"/>
          </svg>
        </button>
      </div>
      
      {status && (
        <p className={`text-sm ${status.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
          {status}
        </p>
      )}
    </div>
  );
}
