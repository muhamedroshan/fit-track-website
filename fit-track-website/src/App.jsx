import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DownloadPage from './pages/DownloadPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import BetaRegistrationPage from './pages/BetaRegistrationPage';

// Apply the global background class to the root container
function App() {
  return (
    <div className="bg-blur-gradient min-h-screen">
      <Router>
        <Header />
        <main className="container mx-auto px-6 py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/beta" element={<BetaRegistrationPage />} /> 
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
