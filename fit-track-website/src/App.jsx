import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

function App() {
  return (
    <div className="bg-blur-gradient min-h-screen text-[#c9d1d9]">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="container mx-auto px-6 py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
