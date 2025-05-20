'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

const generateWalletAddress = () => {
  const chars = '0123456789abcdef';
  let address = '0x';
  for (let i = 0; i < 40; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
};

const generateRandomAmount = () => {
  return Math.floor(Math.random() * (500 - 350 + 1) + 350);
};

const generateRecentTransactions = (count = 20) => {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const minutesAgo = Math.floor(Math.random() * 60 * 24); // Random time within last 24 hours
    const timestamp = new Date(now - minutesAgo * 60 * 1000);
    
    return {
      id: `tx-${i}`,
      walletAddress: generateWalletAddress(),
      amount: generateRandomAmount(),
      timestamp,
      status: 'Claimed'
    };
  }).sort((a, b) => b.timestamp - a.timestamp);
};

const generateLiveTransaction = () => {
  return {
    id: `tx-${Date.now()}`,
    walletAddress: generateWalletAddress(),
    amount: generateRandomAmount(),
    timestamp: new Date(),
    status: 'Claimed'
  };
};

export default function TransactionHistory({ lastClaimedAddress }) {
  const [transactions, setTransactions] = useState([]);
  const [liveTransaction, setLiveTransaction] = useState(null);

  useEffect(() => {
    // Initialize with recent transactions
    setTransactions(generateRecentTransactions(10));

    // Simulate real-time transactions
    const interval = setInterval(() => {
      const newTransaction = generateLiveTransaction();
      setLiveTransaction(newTransaction);
      setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]); // Keep last 10 transactions
    }, Math.random() * 10000 + 5000); // Random interval between 5-15 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle user claims
  useEffect(() => {
    if (lastClaimedAddress) {
      const userClaim = {
        id: `tx-user-${Date.now()}`,
        walletAddress: lastClaimedAddress,
        amount: generateRandomAmount(),
        timestamp: new Date(),
        status: 'You Claimed',
        isUserClaim: true
      };
      setLiveTransaction(userClaim);
      setTransactions(prev => [userClaim, ...prev.slice(0, 9)]); // Keep last 10 transactions
    }
  }, [lastClaimedAddress]);

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-lg overflow-hidden relative">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Recent Claims</h3>
      </div>

      {/* Transactions List with Custom Scrollbar */}
      <div className="max-h-[400px] overflow-y-auto 
        scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#DAA520]/40 
        hover:scrollbar-thumb-[#DAA520]/60 
        [&::-webkit-scrollbar]:w-2 
        [&::-webkit-scrollbar-track]:bg-black/20 
        [&::-webkit-scrollbar-thumb]:bg-[#DAA520]/40 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb:hover]:bg-[#DAA520]/60">
        <div className="space-y-1">
          <AnimatePresence mode="popLayout">
            {transactions.map((tx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DAA520] to-[#8B6B1F] flex items-center justify-center text-white text-xs font-medium">
                      {tx.walletAddress.slice(2, 6)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{formatAddress(tx.walletAddress)}</p>
                      <p className="text-xs text-gray-400">
                        <span className={tx.isUserClaim ? "text-[#DAA520]" : ""}>{tx.status}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">
                      {tx.amount} <span className="text-gray-400">ST</span>
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatDistanceToNow(tx.timestamp, { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Live Transaction Toast - Repositioned to Top */}
      <AnimatePresence>
        {liveTransaction && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-4 right-4 p-4 bg-black/90 border border-[#DAA520]/20 rounded-lg shadow-xl backdrop-blur-lg max-w-sm z-50 transform-gpu"
            onAnimationComplete={() => {
              setTimeout(() => setLiveTransaction(null), 3000);
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DAA520] to-[#8B6B1F] flex items-center justify-center text-white text-xs font-medium">
                {liveTransaction.walletAddress.slice(2, 6)}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <p className="text-white font-medium">{formatAddress(liveTransaction.walletAddress)}</p>
                  <span className="px-2 py-1 bg-[#DAA520]/10 rounded-full text-[#DAA520] text-xs">
                    {liveTransaction.isUserClaim ? 'Your Claim' : 'New Claim'}
                  </span>
                </div>
                <p className="text-sm text-gray-400">Claimed {liveTransaction.amount} ST tokens</p>
              </div>
            </div>
            
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520]/20 to-[#8B6B1F]/20 animate-pulse" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}