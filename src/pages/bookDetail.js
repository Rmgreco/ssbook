// src/BookDetail.js
import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { BOOK_DETAIL_QUERY } from "../queries/queries";
import BookDetails from "../components/bookInfo/bookInfo";
import Footer from "../components/footer/footer";



function BookDetail() {
  const { bookId } = useParams();

  const { loading, error, data } = useQuery(BOOK_DETAIL_QUERY, {
    variables: { id: bookId },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const book = data.book;

  return (
    <div>
      <BookDetails book={book} />
      <Footer />

    </div>
  );
}

export default BookDetail;
