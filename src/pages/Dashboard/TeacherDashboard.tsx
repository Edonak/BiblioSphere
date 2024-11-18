import React, { useState } from "react";
import "../css/Dashboard.css";
import BookForm from "../../component/Subscription/GeneralComponent/BookForm";
import { books } from "./../../data/books";

const TeacherDashboard: React.FC = () => {
  const [bookList, setBookList] = useState(books);

  return (
    <div className="dashboard">
      <h2>Tableau de bord Enseignant</h2>
      <h3>Gestion des Livres</h3>
      <BookForm
        onSubmit={(newBook) =>
          setBookList((prevBooks) => [...prevBooks, { ...newBook, id: Date.now(), addedBy: "Teacher" }])
        }
      />
      <div className="book-list">
        {bookList.map((book) => (
          <div key={book.id} className="book-card">
            <h4>{book.title}</h4>
            <p>Auteur : {book.author}</p>
            <p>Catégorie : {book.category}</p>
            <p>Ajouté par : {book.addedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
