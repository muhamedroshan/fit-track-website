import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoBase64 from '../assets/app-logo.png';

function Header() {
  // State for handling mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Link classes for reuse
  const linkClasses = "text-gray-300 hover:text-green-400 transition-colors";
  
  return (
    <header className="sticky top-0 z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img alt="Fit Track logo" className="w-10 h-10 object-contain" src={logoBase64} />
          <span className="text-2xl font-bold text-white">Fit Track</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={linkClasses}>Home</Link>
          <Link to="/beta" className="text-white bg-primary py-1 px-3 rounded-full hover:bg-green-600 transition-colors">Beta Sign-up</Link> 
          <Link to="/download" className={linkClasses}>Download</Link>
          <Link to="/privacy" className={linkClasses}>Privacy Policy</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-white" onClick={toggleMenu}>
          <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-effect p-4 absolute w-full top-full">
          <div className="flex flex-col space-y-3">
            <Link to="/" className={linkClasses} onClick={toggleMenu}>Home</Link>
             <Link to="/beta" className={linkClasses} onClick={toggleMenu}>Beta Sign-up</Link>
            <Link to="/download" className={linkClasses} onClick={toggleMenu}>Download</Link>
            <Link to="/privacy" className={linkClasses} onClick={toggleMenu}>Privacy Policy</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;