'use client';

import Image from 'next/image';

export default function ProfileSection() {
  return (
    <section className="md:col-span-5 lg:col-span-4 space-y-6">
      {/* Banner */}
      <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-lg p-4 flex space-x-3">
        <div className="p-2 bg-orange-600/20 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-orange-300">Advanced: Node Documentation</h3>
          <p className="text-xs text-gray-400">Run & configure your own Sidra node.</p>
        </div>
      </div>

      {/* ID Card */}
      <ProfileCard/>
    </section>
  );
}
const ProfileCard = () => (
  <div className="bg-card text-card-foreground rounded-xl border border-primary/20 relative aspect-[1.586/1] w-full max-w-[475px] overflow-hidden shadow-xl">
    <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-red-600 to-red-800" />
    <div className="absolute inset-0 bg-linear-to-tr from-red-600/30 via-orange-400/20 to-rose-500/30" />
    <div className="bg-[radial-gradient(circle_at_top_right,var(--color-orange-300),transparent_60%)]/20 absolute inset-0" />
    <div className="absolute inset-0 bg-linear-to-r from-transparent via-orange-200/10 to-transparent" />
    <div className="absolute inset-0 bg-linear-to-t from-white/[0.02] to-transparent" />
    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,white/5_45%,white/10_50%,white/5_55%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_calc(100%/80),rgba(255,255,255,0.01)_calc(100%/80))] bg-[size:20px_20px]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_calc(100%/80),rgba(255,255,255,0.01)_calc(100%/80))] bg-[size:20px_20px]" />
    <div className="absolute inset-0">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-full opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 30 L15 0 L45 0 L60 30 L45 60 L15 60 Z\' fill=\'none\' stroke=\'white\' strokeWidth=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />
        <div className="absolute top-8 left-8 h-32 w-32 opacity-20">
          <div className="absolute h-0.5 w-full rotate-45 transform bg-linear-to-r from-white/30 to-transparent" />
          <div className="absolute right-0 h-full w-0.5 bg-linear-to-b from-white/30 to-transparent" />
          <div className="absolute top-0 right-0 h-3 w-3 rounded-full border border-white/40" />
        </div>
        <div className="absolute top-4 right-20 h-24 w-24 opacity-15">
          <div className="absolute h-full w-full rotate-45 transform border-2 border-white/20" />
          <div className="absolute top-1/2 left-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rotate-45 transform border border-white/30" />
        </div>
        <div className="absolute right-16 bottom-16 h-40 w-40 opacity-20">
          <div className="absolute h-0.5 w-full bg-linear-to-l from-white/30 via-white/10 to-transparent" />
          <div className="absolute h-full w-0.5 bg-linear-to-t from-white/30 via-white/10 to-transparent" />
          <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
      </div>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden opacity-10">
        <div className="absolute top-0 -left-1/4 h-full w-1/2 rotate-45 transform bg-linear-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -right-1/4 bottom-0 h-full w-1/2 -rotate-45 transform bg-linear-to-l from-transparent via-white/20 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 h-96 w-96 opacity-20">
        <div className="absolute h-full w-full translate-x-1/2 -translate-y-1/2 transform rounded-full border border-white/30" />
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </div>
    <div className="absolute top-4 right-4">
      <Image
        src="/icons/ios/100.png"
        alt="Logo"
        width={100}
        height={100}
        className="h-12 w-12 object-contain mix-blend-color-dodge sm:h-16 sm:w-16"
      />
    </div>
    <div className="absolute right-4 bottom-4 mix-blend-overlay">
      <div className="relative flex items-center gap-1.5 rounded-full border border-white/20 bg-linear-to-r from-white/30 via-white/20 to-white/10 px-3 py-1.5 backdrop-blur-sm">
        <p className="relative text-base font-bold text-white mix-blend-plus-lighter">0</p>
        <span className="text-xs font-medium text-white">Referrals</span>
      </div>
    </div>
    <div className="absolute top-4 left-4">
      <div className="relative h-[120px] w-[120px] md:h-[150px] md:w-[150px]">
        <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">
          <canvas height="150" width="150" style={{ height: '150px', width: '150px' }} />
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 left-3 text-white">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex flex-row items-start justify-start gap-1">
          <h3 className="text-xl font-bold tracking-tight text-white mix-blend-hard-light sm:text-xl">
            Claim Your Tokens
          </h3>
        </div>
       
     
      </div>
    </div>
  </div>
);