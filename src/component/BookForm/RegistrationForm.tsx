// src/components/RegistrationForm.tsx

import React, { useState } from 'react';
import '../css/Registration.css'; 

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<'student' | 'teacher' | 'admin'>('student'); // Défaut sur 'student'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, role });
    // Ici vous pouvez ajouter la logique pour soumettre les données au backend
  };

  return (
    <div className="registration-container">
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </div>
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
        <div className="form-group">
          <label>Rôle</label>
          <select value={role} onChange={(e) => setRole(e.target.value as 'student' | 'teacher' | 'admin')} required>
            <option value="student">Étudiant</option>
            <option value="teacher">Professeur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>
        <button type="submit" className="btn submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegistrationForm;