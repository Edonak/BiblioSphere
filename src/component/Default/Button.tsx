import React from 'react';
import '../css/Button.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  color?: string; // couleur personnalisable
  backgroundColor?: string; // couleur de fond personnalisable
};

const Button: React.FC<ButtonProps> = ({ label, onClick, color = '#ffffff', backgroundColor = '#007bff' }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ color, backgroundColor }} // styles dynamiques
    >
      {label}
    </button>
  );
};

export default Button;
