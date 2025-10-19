// FeatureCard is a reusable component that receives data as props
function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-effect p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
      {/* Icon */}
      <span className="material-icons text-green-400 text-4xl mb-4">
        {icon}
      </span>
      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      {/* Description */}
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard;