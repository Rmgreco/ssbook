import React from "react";
// import { Link } from "react-router-dom";
import { ALL_BOOKS_QUERY } from "../queries/queries";
import { useQuery } from "@apollo/client";
import Header from "../components/header/header";
import FavoriteBooks from "../components/favoriteBooks/favoriteBooks";

function Home() {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  if (loading) return "Carregando...";
  if (error) return `Erro! ${error.message}`;

  const books = data.allBooks;

  console.log(books, "data");
  return (
    <>
      <Header />
      <FavoriteBooks />
      {/* <h1>Sua Biblioteca de Livros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default Home;
