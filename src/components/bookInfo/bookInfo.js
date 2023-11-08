import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bookDetails.css"
import React from "react";
import { useMediaQuery } from "react-responsive";
import { faDownload, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";




function BookDetails({ book }) {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const paragraphs = book.description.split("\n\n");
  return (
    <>
      {isMobile ? (
        <div className="book-details">
          <div className="cover">
            <img src={book.cover} alt={book.name} />
          </div>
          <div className="description">
            <h2 className="book-info-title">{book.name}</h2>
            <p className="book-info-author">{book.author.name}</p>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>) :
        (
          <div className="book-details-desktop">
            <div className="cover-desktop">
              <img src={book.cover} alt={book.name} />
              <div className="icon-button-book">
                <FontAwesomeIcon icon={faHeart} />
                <span className="icon-description">Favoritar</span>
              </div>
              <div className="icon-button-book">
                <FontAwesomeIcon icon={faShareAlt} />
                <span className="icon-description">Compartilhar</span>
              </div>
              <div className="icon-button-book">
                <FontAwesomeIcon icon={faDownload} />
                <span className="icon-description">Salvar em uma lista</span>
              </div>
            </div>
            <div className="book-tittle-desktop">
              <h2 className="book-info-title-desktop">{book.name}</h2>
              <p className="book-info-author-desktop">{book.author.name}</p>
              <div className="container-desktop">
              {paragraphs.map((paragraph, index) => (
                <p className="paragraph-desktop" key={index}>{paragraph}</p>
              ))}
              </div>
             
            </div>
          </div>)
      }
    </>
  );
}

export default BookDetails;

