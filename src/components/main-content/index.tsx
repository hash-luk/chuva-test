import * as Styled from "./styles";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doiIcon from "../../assets/icons/doi.svg";
import photo from "../../assets/img/photo.png";
import coverImg from "../../assets/img/dewey1.png";

const Main = () => {
  function handleDownload() {
    window.open("https://www.soundczech.cz/temp/lorem-ipsum.pdf", "_blank");
  }

  function handleFavourite() {
      const star = document.querySelector(".star");

      star?.classList.toggle("star--active");
  }

  function handleDOI() {
    window.open("https://www.doi.org", "_blank");
  }

  function handleVideoClick() {
    window.open("https://www.youtube.com/watch?v=h2ftUTb098Q&t=108s", "_blank");
  }

  return (
    <Styled.Container>
      <div className="left-content">
        <Styled.Title>
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
        </Styled.Title>
        <Styled.VideoContainer onClick={handleVideoClick}>
          <Styled.VideoTitle>
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
          </Styled.VideoTitle>
          <Styled.VideoInformation>
            <div className="photo">
              <div className="outline">
                <img src={photo} alt="Foto do Autor" className="photo" />
              </div>
            </div>
            <div className="texts">
              <p>Beatriz Christiane Melo</p>
              <p>FCA / Universidade Estadual de Campinas</p>
            </div>
          </Styled.VideoInformation>
          <div className="filter"></div>
          <img src={coverImg} alt="Capa do vídeo" className="videocover" />
        </Styled.VideoContainer>
      </div>
      <div className="right-content">
        <Styled.ButtonsContainer>
          <div className="buttons-elements">
            <Styled.Button className="download" onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} inverse className="icon" />
              Download
            </Styled.Button>
            <Styled.Button onClick={handleFavourite}>
              <FontAwesomeIcon icon={faStar} inverse className="icon star" />
            </Styled.Button>
            <Styled.Button onClick={handleDOI}>
              <img src={doiIcon} alt="Ícone da DOI" className="icon" />
            </Styled.Button>
          </div>
          <p>COMO CITAR ESSE TRABALHO?</p>
        </Styled.ButtonsContainer>
        <Styled.DetailsContainer>
          <p className="details-title">Detalhes</p>
          <div className="details-content">
            <p>
              <span>Tipo Apresentação: </span> <b>Pôster</b>
            </p>
            <p>
              <span>Eixo temático: </span>
              <b>Alimentação e saúde(AS)</b>
            </p>
            <p>
              <span>Palavras-chaves: </span>
              <b>Alimentos funcionais, alimentação escolar.</b>
            </p>

            <br />

            <div className="authors">
              <p>
                <b>Autores:</b>
              </p>
              <p>Galileo Galilei¹</p>
              <p>Berta Lange de Morretes²</p>
              <p>Isaac Newton³</p>
              <p>Cesar Lattes¹</p>
              <p>Stephen Hawking⁴</p>
            </div>

            <br />

            <div className="index">
              <p>¹Universidade Estadual de Campinas</p>
              <p>²Universidade de São Paulo</p>
              <p>³Instituto Nacional de Pesquisas Espaciais</p>
              <p>⁴Universidade Federal do Rio de Janeiro</p>
            </div>
          </div>
        </Styled.DetailsContainer>
      </div>
    </Styled.Container>
  );
};

export default Main;
