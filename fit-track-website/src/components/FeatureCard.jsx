function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900/60 border border-gray-800 hover:border-gray-700 p-6 rounded-2xl transition-colors flex flex-col items-start">
      <span className="material-icons text-emerald-400 text-3xl mb-3">
        {icon}
      </span>
      <h3 className="text-base font-semibold mb-1.5 text-white">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;