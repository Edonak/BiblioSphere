import React, { useState } from "react";
import "./../component/css/Librairy.css";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  description: string;
  available: boolean;
};

const books: Book[] = [
  {
    id: 1,
    title: "Introduction to Mathematics",
    author: "John Doe",
    category: "Mathématiques",
    cover: "/images/mathematics.jpg",
    description: "Un livre complet sur les concepts de base des mathématiques.",
    available: true,
  },
  {
    id: 2,
    title: "Les Fleurs du Mal",
    author: "Charles Baudelaire",
    category: "Littérature",
    cover: "/images/literature.jpg",
    description: "Une œuvre poétique majeure de la littérature française.",
    available: false,
  },
  {
    id: 3,
    title: "Histoire des Sciences",
    author: "Marie Curie",
    category: "Science",
    cover: "/images/science.jpg",
    description: "Un voyage fascinant à travers l'évolution des sciences.",
    available: true,
  },
  // Ajoutez plus de livres ici...
];

const LibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("Tous");

  const filteredBooks = books.filter(
    (book) =>
      (filter === "Tous" || book.category === filter) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="library-page">
      {/* Barre de Recherche */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Rechercher un livre par titre ou auteur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="Tous">Tous</option>
          <option value="Mathématiques">Mathématiques</option>
          <option value="Littérature">Littérature</option>
          <option value="Science">Science</option>
        </select>
      </div>

      {/* Liste des Livres */}
      <div className="books-section">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.description}</p>
                <p
                  className={`availability ${
                    book.available ? "available" : "unavailable"
                  }`}
                >
                  {book.available ? "Disponible" : "Prêté"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Aucun livre trouvé</p>
        )}
      </div>

      {/* Recommandations */}
      <div className="recommendations">
        <h2>Recommandations</h2>
        <p>Découvrez nos livres les plus populaires et récemment ajoutés !</p>
        {/* Ajoutez ici une logique pour afficher des recommandations dynamiques */}
      </div>
    </div>
  );
};

export default LibraryPage;
