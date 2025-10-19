// Note: You should save your app screen image in your public/assets or src/assets folder
import appScreenshot from '../assets/app-screenshot.png'; // Placeholder for the actual image file

function IntroSection() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-12">
      <div className="text-center md:text-left">
        {/* Title/Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Fit Track</h1>
        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0">
          Your ultimate companion for tracking workouts, planning your fitness journey, and achieving your goals with precision and style.
        </p>
        <div className="mt-8">
          {/* Call to Action - Using a standard <a> here for simplicity, link to your app store */}
          <a 
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-green-400/20" 
            href="/#/beta"
          >
            Beta Sign-Up
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="flex justify-center">
        {/* Using a relative path for the image */}
        <img 
          alt="App screen on a phone" 
          className="w-full max-w-sm md:max-w-md rounded-3xl shadow-2xl shadow-green-400/20 transform hover:scale-105 transition-transform duration-300" 
          src={appScreenshot} 
        />
      </div>
    </section>
  );
}

export default IntroSection;