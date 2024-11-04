import React from "react";
import "../../component/css/Herosection.css";
import Button from "../Default/Button";

type HeroSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};
const handleClick = () => {
  console.log("Bouton cliqué !");
};
const HeroSection: React.FC<HeroSectionProps> = ({
  
  title,
  description,
  imageUrl
}) => {
  return (
    <section className="hero-section">
      <div className="hero-section-content">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <Button
            label="Visiter la bibliothèque"
            onClick={handleClick}
            color="#ffffff"
            backgroundColor="rgba(70, 105, 159, 1)"
          />
        </div>
        <div className="hero-image">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



















