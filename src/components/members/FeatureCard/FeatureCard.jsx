import "./FeatureCard.css";

function FeatureCard({ title, subtitle, image, bg, features = [] }) {
  return (
    <div className="feature-card" style={{ backgroundColor: bg }}>
      <div className="feature-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.label}</strong> - {feature.detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="feature-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default FeatureCard;
