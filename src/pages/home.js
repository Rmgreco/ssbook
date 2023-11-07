import React from "react";
import Header from "../components/header/header";
import FavoriteBooks from "../components/favoriteBooks/favoriteBooks";
import FavoriteAuthors from "../components/favoriteAuthors/favoriteAuthors";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <Header />
      <FavoriteBooks />
      <FavoriteAuthors />
      <Footer />
    </>
  );
}

export default Home;
