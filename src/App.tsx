// src/App.tsx

import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './component/Navbar/Navbar';
import HeroSection from './component/Herosection/Herosection';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="app">
        <Navbar />
      </div>
      <div className="">
        <HeroSection
        title="Bienvenue à notre plateforme"
        description="Découvrez nos services et accédez à des ressources exclusives."
        buttonText="Visiter le Bibliothèque"
        imageUrl="./../public/images/imageHerosection.png"
        onButtonClick={() => alert("Bouton cliqué !")} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
