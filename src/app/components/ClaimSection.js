'use client';
import { useState } from 'react';
import { SuccessModal } from './Modals';

export default function ClaimSection({ handleClaim, isLoading, status }) {
  const [walletAddress, setWalletAddress] = useState('');
  
  const onClaimClick = () => {
    handleClaim(walletAddress);
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
      
      {/* Claimable Tokens */}
      <div className="flex justify-between items-center bg-white/5 rounded-lg p-4">
        <div>
          <p className="text-xs text-gray-400">Claimable Tokens</p>
          <p className="font-semibold text-lg">1000 <span className="text-gray-400 text-sm">ST</span></p>
        </div>
        <button          onClick={onClaimClick}
          disabled={isLoading}
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700"
        >
          {isLoading ? 'Claiming...' : 'Claim Tokens'}
        </button>
      </div>      {/* Wallet Address Input */}
      <div className="flex justify-between items-start bg-white/5 rounded-lg p-4">
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-2">Your Wallet Address</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter your wallet address (0x...)"
              className="w-full bg-black/20 border outline-0 border-white/10 rounded-lg px-4 h-10 text-white placeholder-gray-500"
            />
            <button 
              onClick={() => navigator.clipboard.readText().then(text => setWalletAddress(text))}
              className="p-2 hover:bg-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0"
              title="Paste from clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {status && (
        <p className={`text-sm ${status.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
          {status}
        </p>
      )}
    </div>
  );
}
