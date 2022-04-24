import * as Styled from "./styles";
import { faBold,faItalic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewTopic = () => {
  return (
    <Styled.Container>
      <p className="sectionTitle">
        Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
      </p>

      <div className="inputs">
        <div className="matter">
          <p className="about">Assunto</p>
          <input type="text" placeholder="Defina um tópico sucinto para notificar os autores..."/>
        </div>

        <div className="content">
          <p>Conteúdo</p>
          <textarea rows={6}></textarea>
          <div className="controls">
            <div className="text-edit">
              <FontAwesomeIcon icon={faBold} className="icon"/>
              <FontAwesomeIcon icon={faItalic} className="icon"/>
            </div>
            <button className="sendButton">Enviar</button>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default NewTopic;
