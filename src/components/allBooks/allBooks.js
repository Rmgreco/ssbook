import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_BOOKS_QUERY } from "../../queries/queries";
import "./allBooks.css";
import { Link } from "react-router-dom";

function AllBooks() {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  if (loading) return "Carregando...";
  if (error) return `Erro! ${error.message}`;

  const books = data.allBooks;
  console.log(books);

  return (
    <div className="lib-book">
      {books.map((book, index) => (
        <Link
          to={`/book/${books[0].id}`}
          className="book-item-link"
          key={index}
        >
          <div className="book-item">
            <img src={book.cover} alt={book.name} />
            <div className="all-book-info">
              <p className="all-book-title">{book.name}</p>
              <p className="all-book-author">{book.author.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AllBooks;
