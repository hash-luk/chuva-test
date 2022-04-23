import * as Styled from "./styles";
import hand from "../../assets/icons/hand.svg";
import qea from "../../assets/icons/Q&A.svg";
import people from "../../assets/icons/people.svg";
import Topic from "../topics";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleContainer } from "../resume/styles";

const Discussions = () => {
  return (
    <Styled.Container>
      <TitleContainer>Discussões</TitleContainer>
      <Styled.ContentContainer>
        <Styled.SectionTitle>
          Compartilhe suas ideias ou dúvidas com os autores!
        </Styled.SectionTitle>

        <Styled.IconsContainer>
          <img src={hand} alt="" className="icon" />
          <img src={qea} alt="Perguntas e respostas" className="icon" />
          <img src={people} alt="Interaja na comunidade" className="icon" />
        </Styled.IconsContainer>

        <p>
          Sabia que o maior estímulo no desenvolvimento científico e cultural é
          a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
        </p>

        <Styled.Button>
          <FontAwesomeIcon icon={faAdd} inverse className="faIcon" />
          criar tópico
        </Styled.Button>
      </Styled.ContentContainer>
      <Topic />
      <Topic />
    </Styled.Container>
  );
};

export default Discussions;
