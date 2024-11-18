import React, { useState } from "react";
import "./../../component/css/Dashboard.css";
import BookForm from "../../component/Subscription/GeneralComponent/BookForm";

const AdminDashboard: React.FC = () => {
  const [bookList, setBookList] = useState(books);

  const handleDeleteBook = (id: number) => {
    setBookList((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>Tableau de bord Administrateur</h2>
      <h3>Actions des utilisateurs</h3>
      <ul>
        <li>Marie a téléchargé "World Literature".</li>
        <li>Jean a vu "Introduction to Algebra".</li>
        <li>Sophie a payé pour "Introduction to Algebra".</li>
      </ul>
      <h3>Gestion des Livres</h3>
      <BookForm
        onSubmit={(newBook) =>
          setBookList((prevBooks) => [...prevBooks, { ...newBook, id: Date.now(), addedBy: "Admin" }])
        }
      />
      <div className="book-list">
        {bookList.map((book) => (
          <div key={book.id} className="book-card">
            <h4>{book.title}</h4>
            <p>Auteur : {book.author}</p>
            <p>Catégorie : {book.category}</p>
            <p>Ajouté par : {book.addedBy}</p>
            <button onClick={() => handleDeleteBook(book.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
