import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-24 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {currentYear} Fit Track. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Using Link for internal navigation */}
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/download" className="hover:text-green-400">Download</Link>
          <Link to="/privacy" className="hover:text-green-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;