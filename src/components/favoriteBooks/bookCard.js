import React from "react";
import "./bookCard.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.name} />
      <h3 className="book-title">{book.name}</h3>
      <p>{book.author.name}</p>
    </div>
  );
}

export default BookCard;
