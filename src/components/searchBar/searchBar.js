import React from "react";
import "./searchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Pesquisar" className="search-bar" />
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
