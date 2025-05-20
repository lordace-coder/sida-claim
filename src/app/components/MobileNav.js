export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-black/60 backdrop-blur border-t border-white/10 flex justify-around py-2 text-xs font-medium">
      <a href="#" className="flex flex-col items-center space-y-1 text-orange-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2 7-7 7 7 2 2M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10"/>
        </svg>
        Home
      </a>
      <a href="https://www.sidrachain.com/wallets" className="flex flex-col items-center space-y-1 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 0a8 8 0 110 16m0-16a8 8 0 000 16m0-10a2 2 0 100 4 2 2 0 000-4z"/>
        </svg>
        Wallet
      </a>
      <a href="https://www.sidrachain.com/swap" className="flex flex-col items-center space-y-1 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17l6-6 4 4 8-8"/>
        </svg>
        Swap
      </a>
      <a href="https://www.sidrachain.com/wallets/send" className="flex flex-col items-center space-y-1 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 8h.01M16 12h.01M12 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Send
      </a>
    </nav>
  );
}
