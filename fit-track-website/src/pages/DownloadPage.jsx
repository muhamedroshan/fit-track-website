import { Link } from 'react-router-dom';

function DownloadPage() {
  return (
    <div className="text-center py-20">
      
      {/* 🛑 Main Status Header */}
      <div className="inline-block glass-effect p-3 rounded-full mb-6">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">
          Launching Soon!
        </span>
      </div>

      {/* 🚀 Main Title and Messaging */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        Fit Track is Almost Here
      </h1>
      
      <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        We're putting the final polish on the ultimate workout tracking app. Get ready to transform your fitness journey!
      </p>

      {/* 🛎️ Call to Action: Redirect to Beta/Sign-up */}
      <div className="space-y-4">
        <Link 
          to="/beta" 
          className="bg-primary hover:bg-green-600 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-primary/30"
        >
          Be the First to Know & Test!
        </Link>
        <p className="text-sm text-gray-500">
            Click the link above to join our private beta and get early access.
        </p>
      </div>

      {/* 📱 Platform Icons (Visual Teaser) */}
      <div className="mt-16 text-gray-500 text-2xl space-x-6">
        <span className="material-icons text-white">android</span>
        <span className="material-icons text-white">phone_iphone</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Available on iOS and Android
      </p>

    </div>
  );
}

export default DownloadPage;