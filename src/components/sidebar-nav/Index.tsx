import React from "react";
import * as Styled from "./styles";
import logo from "../../assets/img/logo.svg";
import { useState, useEffect } from "react";

const SidebarNav = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const posY = window.scrollY;
    setScrollY(posY);
  };

  useEffect(() => {
    const bar = document.querySelector(".sidebar");

    window.addEventListener("scroll", handleScroll);

    if (scrollY > 0) {
      bar?.classList.add("sidebar-fixed");
    }
  }, [scrollY]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const buttons = document.querySelectorAll("#navButton");

    buttons.forEach((button) => {
      button.classList.remove("selected");
    });

    if(e.currentTarget.innerHTML !== "Trabalhos") {
      alert("Área em desenvolvimento!");
      buttons.forEach(button => {
        if(button.innerHTML === "Trabalhos") {
          button.classList.add("selected");
        }
      })
      return
    } else {
      e.currentTarget.classList.add("selected");
    }
  }

  return (
    <Styled.Container>
      <Styled.Sidebar className="sidebar">
        <Styled.Title>
          <h1>SLACA 2019</h1>
        </Styled.Title>
        <img src={logo} alt="Logo Slaca 13"/>
        <div className="nav-buttons">
          <Styled.Button id="navButton" onClick={handleClick}>
            Apresentação
          </Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>
            Comitês
          </Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>
            Autores
          </Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>
            Eixos temáticos
          </Styled.Button>
          <Styled.Button
            id="navButton"
            onClick={handleClick}
            className="selected"
          >
            Trabalhos
          </Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>
            Contato
          </Styled.Button>
        </div>
      </Styled.Sidebar>
    </Styled.Container>
  );
};

export default SidebarNav;
