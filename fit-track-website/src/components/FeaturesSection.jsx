import FeatureCard from './FeatureCard';

// --- Data extracted from your HTML to make the section dynamic ---
const featuresData = [
  { icon: 'analytics', title: 'Track and Record Workouts', description: 'Log your sets, reps, weight, and rest time with our intuitive interface. See your progress at a glance.' },
  { icon: 'event_note', title: 'Plan Workouts in Advance', description: 'Easily schedule your workouts by day or date. Stay organized and committed to your routine.' },
  { icon: 'fitness_center', title: 'Create Custom Exercises', description: 'Build your own exercises with custom parameters like time, weight, or bodyweight.' },
  { icon: 'insights', title: 'Track Weight & Height', description: 'Monitor your body measurements with beautiful, easy-to-read graphs and charts.' },
  { icon: 'collections', title: 'Transformation Videos', description: 'Take daily workout photos and export them into inspiring transformation videos effortlessly.' },
  { icon: 'notifications_active', title: 'Workout Reminders', description: 'Never miss a session. Get timely reminders so you\'re always on track with your goals.' },
  { icon: 'timer', title: 'Easy Rest Timer', description: 'Toggle the rest timer with a single tap during your workout to keep your intensity high.' },
  { icon: 'model_training', title: '150+ Workout Presets', description: 'Get started quickly with a huge library of professionally designed workout presets.' },
  { icon: 'security', title: '100% Data Privacy', description: 'Your data is yours alone. We ensure complete privacy and security for all your information.' },
  { icon: 'mood_bad', title: 'No Annoying Ads', description: 'Enjoy a seamless and focused workout experience without any distracting advertisements.' },
  { icon: 'design_services', title: 'Intuitive UI Design', description: 'A nice and cool user interface that makes tracking your fitness journey a pleasure.' },
];

function FeaturesSection() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Using the map function to render a list of cards from the data */}
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index} // Using index as key since the data is static
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;