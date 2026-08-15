import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoBase64 from '../assets/app-logo.png';
import { DownloadIcon, AppleIcon, GooglePlayIcon } from './Icons';
import { APP_CONFIG } from '../config/appConfig';

function getMobileStoreInfo() {
  if (typeof window === 'undefined') {
    return {
      url: APP_CONFIG.playStoreUrl,
      platform: 'android',
      name: 'Google Play'
    };
  }
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  const isIos = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIos) {
    return {
      url: APP_CONFIG.appStoreUrl,
      platform: 'ios',
      name: 'App Store'
    };
  }
  return {
    url: APP_CONFIG.playStoreUrl,
    platform: 'android',
    name: 'Google Play'
  };
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [storeInfo, setStoreInfo] = useState({
    url: APP_CONFIG.playStoreUrl,
    platform: 'android',
    name: 'Google Play'
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setStoreInfo(getMobileStoreInfo());
  }, []);

  // Lock body scroll when mobile side panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = (path) =>
    `text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? 'text-white font-semibold'
        : 'text-gray-400 hover:text-white'
    }`;

  const scrollToDownload = () => {
    if (isOpen) setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToDownload: true } });
    } else {
      const elem = document.getElementById('download');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 glass-effect border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img alt="Fit Track logo" className="w-8 h-8 object-contain rounded-lg" src={logoBase64} />
            <span className="text-xl font-bold text-white">
              Fit Track
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/privacy" className={linkClasses('/privacy')}>Privacy Policy</Link>
            <Link to="/terms" className={linkClasses('/terms')}>Terms &amp; Conditions</Link>
            
            <button
              type="button"
              onClick={scrollToDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors cursor-pointer"
            >
              <DownloadIcon className="w-4 h-4 text-emerald-400" />
              <span>Download</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors cursor-pointer" 
            onClick={toggleMenu}
            aria-label="Open navigation menu"
          >
            <span className="material-icons">menu</span>
          </button>
        </nav>
      </header>

      {/* --- MOBILE NAVIGATION SIDE PANEL (DRAWER) --- */}
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 z-[90] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Solid 90% Width Side Panel Drawer */}
      <aside
        style={{ backgroundColor: '#0d1117' }}
        className={`fixed top-0 right-0 h-[100dvh] w-[90%] max-w-sm bg-[#0d1117] border-l border-gray-800 z-[100] shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Top: Header & Nav */}
        <div className="flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <img alt="Fit Track logo" className="w-8 h-8 object-contain rounded-lg" src={logoBase64} />
              <span className="text-lg font-bold text-white">Fit Track</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <span className="material-icons text-2xl">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 mt-6">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-emerald-500/15 text-emerald-400 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800/80 hover:text-white'
              }`}
            >
              <span className="material-icons text-xl">home</span>
              <span>Home</span>
            </Link>

            <Link
              to="/privacy"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                location.pathname === '/privacy'
                  ? 'bg-emerald-500/15 text-emerald-400 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800/80 hover:text-white'
              }`}
            >
              <span className="material-icons text-xl">privacy_tip</span>
              <span>Privacy Policy</span>
            </Link>

            <Link
              to="/terms"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                location.pathname === '/terms'
                  ? 'bg-emerald-500/15 text-emerald-400 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800/80 hover:text-white'
              }`}
            >
              <span className="material-icons text-xl">description</span>
              <span>Terms &amp; Conditions</span>
            </Link>
          </nav>
        </div>

        {/* Bottom: Store Button all the way at the bottom */}
        <div className="mt-auto pt-6 border-t border-gray-800 flex flex-col gap-2.5 pb-2">
          <a
            href={storeInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-gray-950 font-bold text-base transition-colors shadow-lg text-center"
          >
            {storeInfo.platform === 'ios' ? (
              <AppleIcon className="w-6 h-6 text-gray-950" />
            ) : (
              <GooglePlayIcon className="w-6 h-6" />
            )}
            <span>Get on {storeInfo.name}</span>
          </a>

          <p className="text-center text-xs text-gray-400">
            Available on iOS &amp; Android
          </p>
        </div>
      </aside>
    </>
  );
}

export default Header;