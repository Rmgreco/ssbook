import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { FAVORITES_AUTHORS_QUERY } from "../../queries/queries";
import "./favoriteAuthors.css";
import styled from "styled-components";
import AuthorCard from "../authorCard/authorCard";

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

  const handleClick = () => {
    setIsSeeMoreTrue(!isSeeMoreTrue); // Alterna o estado entre true e false
  };

  const { loading, error, data } = useQuery(FAVORITES_AUTHORS_QUERY);

  if (loading) return "Carregando...";
  if (error) return `Erro! ${error.message}`;

  const authors = data.favoriteAuthors;
  console.log(data);

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
    </div>
  );
}

export default FavoriteAuthors;
