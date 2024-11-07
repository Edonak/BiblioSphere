import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/BookCatalogue.css';

type CatalogItem = {
  id: number;
  name: string;
  imageUrl: string;
  link: string;
};

const catalogItems: CatalogItem[] = [
  { id: 1, name: 'Mathématique', imageUrl: './../../../../public/images/mathematique.png', link: '/catalog/math' },
  { id: 2, name: 'Littérature', imageUrl: './../../../../public/images/Littérature.jpg', link: '/catalog/litterature' },
  { id: 3, name: 'Technique', imageUrl: './../../../../public/images/Technique.jpeg', link: '/catalog/technique' },
  { id: 4, name: 'Science', imageUrl: './../../../../public/images/Science.png', link: '/catalog/science' },
  { id: 5, name: 'Langue', imageUrl: './../../../../public/images/Langue.jpeg', link: '/catalog/langue' },
  { id: 6, name: 'Histoire', imageUrl: './../../../../public/images/Histoire.png', link: '/catalog/histoire' },
];

const BookCatalog: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleItems = showAll ? catalogItems : catalogItems.slice(0, 3);

  return (
    <section className="catalog">
      <h3>Notre Catalogue</h3>
      <div className="catalog-grid">
        {visibleItems.map((item) => (
          <div key={item.id} className="catalog-item">
            <img src={item.imageUrl} alt={item.name} className="catalog-image" />
            <div className="catalog-overlay">
              <Link to={item.link} className="catalog-link">
                {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={toggleShowAll}>
        {showAll ? 'Voir moins' : 'Voir plus'}
      </button>
    </section>
  );
};

export default BookCatalog;
