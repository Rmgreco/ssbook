import "./favoriteBooks.css";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@apollo/client";
import { FAVORITES_BOOKS_QUERY } from "../../queries/queries";

import BookCard from "../bookCard/bookCard";

function FavoriteBooks() {
  const [isSeeMoreTrue, setIsSeeMoreTrue] = useState(false);

  const handleClick = () => {
    setIsSeeMoreTrue(!isSeeMoreTrue);
  };

  const { loading, error, data } = useQuery(FAVORITES_BOOKS_QUERY);

  if (loading) return "Carregando...";
  if (error) return `Erro! ${error.message}`;

  const books = data.favoriteBooks;
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="favorite-books-container">
      <div className="see-more-container">
        <h2 className="fav-title ">Livros Favoritos</h2>
        <span className="see-more" onClick={handleClick}>
          ver {isSeeMoreTrue ? "menos" : "todos"}
        </span>
      </div>

      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FavoriteBooks;
