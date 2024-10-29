// src/components/LoginForm.tsx

import React, { useState } from 'react';
import { GoogleLogin, googleLogout, CredentialResponse } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import '../component/css/Login.css';

interface User {
  name: string;
  email: string;
  picture: string;
}

interface DecodedToken {
  name: string;
  email: string;
  picture: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleGoogleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      const decoded: DecodedToken = jwt_decode(response.credential);
      setUser({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      });
    }
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      {user ? (
        <div className="profile">
          <img src={user.picture} alt="User avatar" className="profile-img" />
          <h3>Bienvenue, {user.name}</h3>
          <button onClick={handleLogout} className="btn logout">Déconnexion</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
              required
            />
          </div>
          <button type="submit" className="btn login">Connexion</button>
          <div className="google-login">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log("Échec de la connexion")} />
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;



