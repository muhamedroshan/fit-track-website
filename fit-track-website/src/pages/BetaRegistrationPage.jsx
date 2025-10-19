import { useState } from 'react';
const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;

function BetaRegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    language: 'English',
    email: '',
    phone: '',
    whatsappConfirm: false, // Starts as false
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // A quick check to ensure the checkbox is ticked before proceeding.
    if (!formData.whatsappConfirm) {
      setMessage('❌ Please confirm you want to be added to the google group. its mandatory to join the beta.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setMessage('✅ Success! You have been registered for the beta. Check your email for next steps.');
      setFormData({ name: '', language: 'English', email: '', phone: '', whatsappConfirm: false });
    } catch (error) {
      setMessage('❌ Network error. Check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const radioOptions = ['English', 'Malayalam', 'Arabic'];

  return (
    <section className="max-w-xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-white">Join Beta Testing</h1>
      <p className="text-gray-400 text-center mb-8">Be one of the first to track your fitness with Fit Track Beta!</p>

      <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-lg shadow-2xl space-y-6">
        
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Language Radio Buttons */}
        <div>
          <label className="block text-gray-300 font-semibold mb-2">Preferred Language</label>
          <div className="flex space-x-6">
            {radioOptions.map((lang) => (
              <label key={lang} className="inline-flex items-center text-gray-400">
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={formData.language === lang}
                  onChange={handleChange}
                  className="form-radio text-primary bg-gray-700 border-gray-600 focus:ring-primary"
                />
                <span className="ml-2">{lang}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-primary focus:border-primary"
          />
          {/* CHANGE 1: Added helper text for the phone number field */}
          <p className="text-sm text-gray-400 mt-2">
            Please include the country code (e.g., +968, +91).
          </p>
        </div>

        {/* WhatsApp Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="whatsappConfirm"
            name="whatsappConfirm"
            checked={formData.whatsappConfirm}
            onChange={handleChange}
            // CHANGE 2: Added the 'required' attribute to the checkbox
            required
            className="form-checkbox h-5 w-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"
          />
          <label htmlFor="whatsappConfirm" className="ml-3 text-gray-300">
            Confirm adding me to the Fit track google group: its mandatory for getting access to beta verion of app.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Register for Beta'}
        </button>

        {/* Submission Message */}
        {message && (
          <p className={`text-center font-semibold ${message.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

export default BetaRegistrationPage;