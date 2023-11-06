import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { FAVORITES_BOOKS_QUERY } from "../../queries/queries";
import "./favoriteBooks.css";
import BookCard from "./bookCard";

import styled from "styled-components";

const StyleContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: ${(props) => (props.seeMore ? "wrap" : "nowrap")};
`;

StyleContainer.shouldForwardProp = (prop) => prop !== "seeMore";

function FavoriteBooks() {
  const [isSeeMoreTrue, setIsSeeMoreTrue] = useState(false);

  const handleClick = () => {
    setIsSeeMoreTrue(!isSeeMoreTrue); // Alterna o estado entre true e false
  };

  const { loading, error, data } = useQuery(FAVORITES_BOOKS_QUERY);

  if (loading) return "Carregando...";
  if (error) return `Erro! ${error.message}`;

  const books = data.favoriteBooks;
  console.log(books);

  return (
    <div className="favorite-books-container">
      <div className="see-more-container">
        <h2 className="fav-title ">Livros Favoritos</h2>
        <span className="see-more" onClick={handleClick}>
          ver {isSeeMoreTrue ? "menos" : "todos"}
        </span>
      </div>
      <StyleContainer seeMore={isSeeMoreTrue}>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </StyleContainer>
    </div>
  );
}

export default FavoriteBooks;
