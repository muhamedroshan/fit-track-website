import appLogo from '../assets/app-logo.png';
import DownloadSection from './DownloadSection';
import { APP_CONFIG } from '../config/appConfig';

export default function IntroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-8 pb-12">
      {/* App Logo on top of the text */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-900 border border-gray-800 p-2 shadow-lg mb-6 flex items-center justify-center">
        <img 
          src={appLogo} 
          al t="Fit Track App Logo" 
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Main Title with Gradient */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text">
        Fit Track
      </h1>

      {/* Tagline */}
      <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-6">
        {APP_CONFIG.tagline}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto mb-2">
        {APP_CONFIG.highlights.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900/80 border border-gray-800 text-gray-300 text-xs"
          >
            <span className="material-icons text-emerald-400 text-sm">{item.icon}</span>
            <span>{item.label}</span>
          </span>
        ))}
      </div>

      {/* Download Section */}
      <div id="download" className="w-full">
        <DownloadSection />
      </div>
    </section>
  );
}