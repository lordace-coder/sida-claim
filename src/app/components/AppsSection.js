'use client';
import { apps } from '../utils/apps';

export default function AppsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Apps</h2>
      <p className="text-sm text-gray-400 mb-4">Explore Sidra Chain applications</p>

      {/* Desktop cards */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <div key={index} className="rounded-xl bg-black/40 border border-white/5 p-6 space-y-3 backdrop-blur-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-dot"></div>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl font-bold"
              style={{ background: app.color }}
            >
              {app.icon}
            </div>
            <h3 className="text-lg font-semibold">{app.name}</h3>
            <p className="text-xs text-gray-400">{app.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile grid */}
      <div className="md:hidden grid grid-cols-3 gap-6 text-center">
        {apps.map((app, index) => (
          <div key={index} className="space-y-2">
            <div 
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ background: app.color }}
            >
              {app.icon}
            </div>
            <p className="text-xs">{app.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
