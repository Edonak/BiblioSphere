import React, { useState } from "react";

type BookFormProps = {
  onSubmit: (book: { title: string; author: string; category: string }) => void;
};

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, category });
    setTitle("");
    setAuthor("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Auteur"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Catégorie"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Ajouter/Mettre à jour</button>
    </form>
  );
};

export default BookForm;
