import { useState, useEffect } from 'react';
import QRCodeView from './QRCodeView';
import { AppleIcon, GooglePlayIcon, QRIcon } from './Icons';
import { APP_CONFIG } from '../config/appConfig';

/**
 * Detect client device type: 'android' | 'ios' | 'desktop'
 */
function getDeviceType() {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  
  if (/android/i.test(ua)) {
    return 'android';
  }
  
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }
  
  return 'desktop';
}

export default function DownloadSection() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  // --- MOBILE VIEWS ---
  if (deviceType === 'android') {
    return (
      <div className="w-full max-w-sm mx-auto mt-6 flex flex-col items-center">
        <a
          href={APP_CONFIG.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold text-base transition-colors duration-200 shadow-md"
        >
          <GooglePlayIcon className="w-6 h-6" />
          <span>Get it on Google Play</span>
        </a>
        <a
          href={APP_CONFIG.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-1.5"
        >
          <AppleIcon className="w-3.5 h-3.5 text-gray-400" />
          <span>Also available on Apple App Store</span>
        </a>
      </div>
    );
  }

  if (deviceType === 'ios') {
    return (
      <div className="w-full max-w-sm mx-auto mt-6 flex flex-col items-center">
        <a
          href={APP_CONFIG.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-semibold text-base transition-colors duration-200 shadow-md"
        >
          <AppleIcon className="w-6 h-6 text-black" />
          <span>Download on App Store</span>
        </a>
        <a
          href={APP_CONFIG.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-1.5"
        >
          <GooglePlayIcon className="w-3.5 h-3.5" />
          <span>Also available on Google Play</span>
        </a>
      </div>
    );
  }

  // --- DESKTOP / PC VIEW (Both QR Codes) ---
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Google Play / Android Card */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center transition-colors hover:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <GooglePlayIcon className="w-5 h-5" />
            <span className="font-semibold text-white text-base">Google Play</span>
            <span className="text-xs text-gray-400 font-normal">(Android)</span>
          </div>

          {/* QR Code */}
          <div className="my-1">
            <QRCodeView value={APP_CONFIG.playStoreUrl} size={120} />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2.5 mb-3.5">
            <QRIcon className="w-3.5 h-3.5 text-gray-400" />
            <span>Scan with Android camera</span>
          </div>

          <a
            href={APP_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
          >
            <GooglePlayIcon className="w-4 h-4" />
            <span>Open in Play Store</span>
          </a>
        </div>

        {/* Apple App Store / iOS Card */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center transition-colors hover:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <AppleIcon className="w-5 h-5 text-white" />
            <span className="font-semibold text-white text-base">App Store</span>
            <span className="text-xs text-gray-400 font-normal">(iOS)</span>
          </div>

          {/* QR Code */}
          <div className="my-1">
            <QRCodeView value={APP_CONFIG.appStoreUrl} size={120} />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2.5 mb-3.5">
            <QRIcon className="w-3.5 h-3.5 text-gray-400" />
            <span>Scan with iPhone camera</span>
          </div>

          <a
            href={APP_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
          >
            <AppleIcon className="w-4 h-4 text-white" />
            <span>Open in App Store</span>
          </a>
        </div>
      </div>
    </div>
  );
}
