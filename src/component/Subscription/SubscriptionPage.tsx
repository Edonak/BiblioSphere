import React from "react";
import "../css/SubscriptionPage.css";
import Button from "../Default/Button";

const SubscriptionPage: React.FC = () => {
  const handleClick = () => {
    console.log("Bouton cliqué !");
  };
  return (
    <section className="subscription-page">
      <h2>
        Abonnez vous dès maintenant <br></br> Et ayez accès à nos livres
      </h2>
      <div className="subsciption-container">
        <div className="benefits-section">
          <h3>Les Avantages de la Lecture</h3>
          <ul>
            <li>Développement de l'imagination et de la créativité</li>
            <li>Amélioration des compétences en communication</li>
            <li>Renforcement des connaissances et de la culture générale</li>
            <li>Réduction du stress et amélioration de la concentration</li>
            <li>Stimulation de l'esprit critique et de la réflexion</li>
          </ul>
        </div>

        <div className="subscription-details">
          <h3>Abonnement Premium</h3>
          <p>
            <strong>Prix :</strong> $99/an
          </p>
          <ul>
            <li>Accès à des centaines de livres</li>
            <li>Possibilité de créer votre propre collection de livres</li>
            <li>Notifications lorsque nous téléchargeons de nouveaux livres</li>
          </ul>

          <Button
            label="Voir tous les abonnements"
            onClick={handleClick}
            color="#ffffff"
            backgroundColor="rgba(70, 105, 159, 1)"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPage;
