import React from "react";
import "../../component/css/Herosection.css"; // Pour les styles CSS (voir ci-dessous)

type HeroSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  onButtonClick: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  onButtonClick,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-section-content">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <button onClick={onButtonClick}>{buttonText}</button>
        </div>
        <div className="hero-image">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
