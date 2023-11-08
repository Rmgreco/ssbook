import React, { useState } from "react";
// import { Link } from "react-router-dom";
import avatar from "../../avatar.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../searchBar/searchBar";

function Header() {
  const [selectedTab, setSelectedTab] = useState("meusLivros");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">
          <span className="title-ss">SS</span>
          <span className="title-book">BOOK</span>
        </h1>
        <div className="desktop-options">
          <SearchBar />
          <button className="add-button">
            <FontAwesomeIcon icon={faPlusCircle} />
            <span className="button-text">Adicionar</span>
          </button>
          <button className="favorites-button">
            <FontAwesomeIcon icon={faHeart} />
            <span className="button-text">Favoritos</span>
          </button>
        </div>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <div className="my-books">
        <span
          className={selectedTab === "meusLivros" ? "active" : ""}
          onClick={() => handleTabClick("meusLivros")}
        >
          Meus Livros
        </span>
        <span
          className={selectedTab === "emprestados" ? "active" : ""}
          onClick={() => handleTabClick("emprestados")}
        >
          Emprestados
        </span>
      </div>
    </div>
  );
}

export default Header;
