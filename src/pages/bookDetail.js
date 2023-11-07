// src/BookDetail.js
import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { BOOK_DETAIL_QUERY } from "../queries/queries";

function BookDetail() {
  const { bookId } = useParams();

  const { loading, error, data } = useQuery(BOOK_DETAIL_QUERY, {
    variables: { id: bookId },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  // const book = data.book;

  return (
    <div>
      {/* <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Descrição: {book.description}</p>
      Outras informações do livro */}
      pagina livro {bookId}
    </div>
  );
}

export default BookDetail;
