import React from 'react';
import '../css/AllSubscriptionsPage.css';

const AllSubscriptionsPage: React.FC = () => {
  return (
    <section className="all-subscriptions-page">
      <h2>Tous les Abonnements</h2>
      <div className="subscription-options">
        <div className="subscription-card">
          <h3>Basique</h3>
          <p>Prix : $49/an</p>
          <ul>
            <li>Accès à 100 livres</li>
            <li>Notifications de nouveaux livres</li>
          </ul>
        </div>

        <div className="subscription-card">
          <h3>Standard</h3>
          <p>Prix : $79/an</p>
          <ul>
            <li>Accès à 250 livres</li>
            <li>Possibilité de créer une collection de livres</li>
            <li>Notifications de nouveaux livres</li>
          </ul>
        </div>

        <div className="subscription-card">
          <h3>Premium</h3>
          <p>Prix : $99/an</p>
          <ul>
            <li>Accès à des centaines de livres</li>
            <li>Création de collection de livres</li>
            <li>Notifications de nouveaux livres</li>
            <li>Support prioritaire</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllSubscriptionsPage;
