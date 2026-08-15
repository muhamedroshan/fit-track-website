import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IntroSection from '../components/IntroSection';
import FeaturesSection from '../components/FeaturesSection';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToDownload) {
      // Small timeout to allow DOM to render
      const timer = setTimeout(() => {
        const elem = document.getElementById('download');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <IntroSection />
      <FeaturesSection />
    </>
  );
}

export default HomePage;