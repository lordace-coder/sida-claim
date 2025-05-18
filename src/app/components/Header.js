import Image from 'next/image';

export default function Header() {
  return (
    <header className="backdrop-blur-sm bg-black/40 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 text-xl font-extrabold">
          <Image src="https://sidrachain.com/favicon.ico" alt="Sidra" width={24} height={24} className="h-6 w-6"/>
          Sidra<span className="text-orange-400">Chain</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#docs" className="hover:text-orange-400">Docs</a>
          <a href="#download" className="hover:text-orange-400">Download</a>
          <a href="#support" className="hover:text-orange-400">Support</a>
        </nav>
        <button className="md:hidden p-2 hover:bg-white/10 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
