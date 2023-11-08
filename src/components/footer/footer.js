import React from "react";
import { useMediaQuery } from "react-responsive";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faSearch,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.png"

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

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
        <div className="footer-desktop">
          <img src={logo} height={23} alt="logo"></img>
          <p>Todos os direitos reservados.<br />
            Studio Sol Books © 2023 </p>
        </div>
      )}
    </div>
  );
}

export default Footer;
