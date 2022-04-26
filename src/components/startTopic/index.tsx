import * as Styled from "./styles";
import { faBold, faItalic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

const NewTopic = () => {
  const [about, setAbout] = useState("");
  const [matter, setMatter] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const inputAbout = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inputMatter = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  function handleClick() {
    const newTopic = document.querySelector(".NewTopicContainer");
    const createdTopic = document.querySelector(".createdTopicContainer");
    const errorModal = document.querySelector(".error-modal");

    if (about === "" || matter === "") {
      errorModal?.classList.remove("hidden");
      errorModal?.classList.add("show");
      
      setTimeout(() => {
        errorModal?.classList.remove("show");
        errorModal?.classList.add("hidden");
      }, 2000);
    } else {
      createdTopic?.classList.add("showContainer");
      newTopic?.classList.remove("showContainer");

      inputAbout.current.value = "";
      inputMatter.current.value = "";
      
      setAbout("");
      setMatter("");
    }
  }

  function handleBoldButton() {
    setBold(!bold);

    bold ? inputMatter.current.style.fontWeight = "bold" : inputMatter.current.style.fontWeight = "normal";
  }

  function handleItalicButton() {
    setItalic(!italic);

    italic ? inputMatter.current.style.fontStyle = "italic" : inputMatter.current.style.fontStyle = "normal";
  }

  return (
    <Styled.Container className="NewTopicContainer hideContainer">
      <p className="sectionTitle">
        Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
      </p>

      <div className="inputs">
        <div className="matter">
          <p className="about">Assunto</p>
          <input
            className="inputAbout"
            ref={inputAbout}
            type="text"
            placeholder="Defina um tópico sucinto para notificar os autores..."
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setAbout(e.currentTarget.value);
            }}
          />
        </div>

        <div className="content">
          <p>Conteúdo</p>
          <textarea
            className="inputContent"
            ref={inputMatter}
            rows={6}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
              setMatter(e.currentTarget.value);
            }}
          ></textarea>
          <div className="controls">
            <div className="text-edit">
              <FontAwesomeIcon icon={faBold} className="icon" onClick={handleBoldButton}/>
              <FontAwesomeIcon icon={faItalic} className="icon" onClick={handleItalicButton}/>
            </div>
            <button className="sendButton" onClick={handleClick}>
              Enviar
            </button>
          </div>
        </div>
      </div>
      <Styled.ErrorModal className="error-modal hidden">
        <p>Preencha todos os campos</p>
      </Styled.ErrorModal>
    </Styled.Container>
  );
};

export default NewTopic;
