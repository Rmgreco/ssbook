import React from "react";
import { useMediaQuery } from "react-responsive";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faSearch,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={`footer${isMobile ? " mobile" : " desktop"}`}>
      {isMobile ? (
        <div className="footer-menu">
          <div className="icon-button">
            <FontAwesomeIcon icon={faHome} />
            <span>Início</span>
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>Adicionar</span>
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faSearch} />
            <span>Buscar</span>
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faHeart} />
            <span>Favoritos</span>
          </div>
        </div>
      ) : (
        <p>Texto para desktop</p>
      )}
    </div>
  );
}

export default Footer;
