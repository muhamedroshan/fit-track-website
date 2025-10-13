function DownloadPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Get the Fit Track App</h1>
      <p className="text-lg text-gray-400 mb-8">
        Download Fit Track now on the App Store and Google Play to start your fitness journey.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors">App Store</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">Google Play</a>
      </div>
    </div>
  );
}

export default DownloadPage;