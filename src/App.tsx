// src/App.tsx

import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './component/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="app">
        <Navbar />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
