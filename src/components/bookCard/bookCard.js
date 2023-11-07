import React from "react";
import { Link } from "react-router-dom";

import "./bookCard.css";

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className="book-card-link">
      <div className="book-card">
        <img src={book.cover} alt={book.name} />
        <h3 className="book-title">{book.name}</h3>
        <p>{book.author.name}</p>
      </div>
    </Link>
  );
}

export default BookCard;
