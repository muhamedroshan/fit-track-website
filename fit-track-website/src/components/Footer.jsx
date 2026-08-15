import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config/appConfig';
import logoBase64 from '../assets/app-logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-24 border-t border-gray-800 py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center space-x-2.5">
            <img alt="Fit Track logo" className="w-6 h-6 object-contain rounded-md" src={logoBase64} />
            <span className="font-semibold text-gray-300">Fit Track</span>
            <span>•</span>
            <p>© {currentYear} All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;