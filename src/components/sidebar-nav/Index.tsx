import React from "react";
import * as Styled from "./styles";
import logo from "../../assets/img/logo.svg";

const SidebarNav = () => {
  
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const buttons = document.querySelectorAll("#navButton");

    buttons.forEach(button => {
      button.classList.remove("selected")
    })

    e.currentTarget.classList.add("selected")
  }

  return (
    <Styled.Container>
      <Styled.Sidebar>
        <Styled.Title>
          <h1>SLACA 2019</h1>
        </Styled.Title>
        <img src={logo} alt="" />
        <div className="nav-buttons">
          <Styled.Button id="navButton" onClick={handleClick}>Apresentação</Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>Comitês</Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>Autores</Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>Eixos temáticos</Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick} className="selected">
            Trabalhos
          </Styled.Button>
          <Styled.Button id="navButton" onClick={handleClick}>Contato</Styled.Button>
        </div>
      </Styled.Sidebar>
    </Styled.Container>
  );
};

export default SidebarNav;
