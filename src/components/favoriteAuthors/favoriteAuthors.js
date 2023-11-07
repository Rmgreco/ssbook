import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { FAVORITES_AUTHORS_QUERY } from "../../queries/queries";
import "./favoriteAuthors.css";
import styled from "styled-components";
import AuthorCard from "../authorCard/authorCard";
import AllBooks from "../allBooks/allBooks";

const StyleAuthorContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: ${(props) => (props.seeMore ? "wrap" : "nowrap")};

  @media (min-width: 800px) {
    justify-content: center;
  }
`;

StyleAuthorContainer.shouldForwardProp = (prop) => prop !== "seeMore";

function FavoriteAuthors() {
  const [isSeeMoreTrue, setIsSeeMoreTrue] = useState(false);
  const [selectedButton, setSelectedButton] = useState("todos");

  const handleClick = () => {
    setIsSeeMoreTrue(!isSeeMoreTrue); // Alterna o estado entre true e false
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const { loading, error, data } = useQuery(FAVORITES_AUTHORS_QUERY);

  if (loading) return "Carregando...";
  if (error) return `Erro! ${error.message}`;

  const authors = data.favoriteAuthors;

  return (
    <div className="favorite-authors-container">
      <div className="see-more-author-container">
        <h2 className="fav-author-title">Autores Favoritos</h2>
        <span className="see-more-authors" onClick={handleClick}>
          ver {isSeeMoreTrue ? "menos" : "todos"}
        </span>
      </div>
      <StyleAuthorContainer seeMore={isSeeMoreTrue}>
        {authors.map((author, index) => (
          <AuthorCard key={index} author={author} />
        ))}
      </StyleAuthorContainer>
      <div className="library-container">
        <h2 className="fav-author-title">Biblioteca</h2>
        <div className="library-selector">
          <div
            onClick={() => handleButtonClick("todos")}
            className={
              selectedButton === "todos" ? "selected-button" : "button"
            }
          >
            Todos
          </div>
          <div
            onClick={() => handleButtonClick("ação")}
            className={selectedButton === "ação" ? "selected-button" : "button"}
          >
            Romance
          </div>
          <div
            onClick={() => handleButtonClick("romance")}
            className={
              selectedButton === "romance" ? "selected-button" : "button"
            }
          >
            Aventura
          </div>
          <div
            onClick={() => handleButtonClick("romance")}
            className={
              selectedButton === "romance" ? "selected-button" : "button"
            }
          >
            Comédia
          </div>
        </div>
        <AllBooks />
      </div>
    </div>
  );
}

export default FavoriteAuthors;
