import "./authorCard.css";
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 10px 21px 30px 21px;
  width: 248px;
  flex-shrink: 0;

  @media (min-width: 800px) {
    width: 25%;
  }
`;

function AuthorCard({ author }) {
  return (
    <StyledCard className="author-card">
      <img src={author.picture} alt={author.name} />

      <div className="info-container">
        <p className="author-title">{author.name}</p>
        <p className="book-count">{author.booksCount} books</p>
      </div>
    </StyledCard>
  );
}

export default AuthorCard;
