import * as Styled from "./styles";
import hand from "../../assets/icons/hand.svg";
import qea from "../../assets/icons/Q&A.svg";
import people from "../../assets/icons/people.svg";
import Topic from "../topics";
import NewTopic from "../startTopic";
import CreatedTopic from "../createdTopic";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleContainer } from "../resume/styles";

const Discussions = () => {
  function handleClick() {
    const newTopic = document.querySelector(".NewTopicContainer");
    const defaultContent = document.querySelector(".defaultDiscussionContainer");

    newTopic?.classList.add("showContainer");
    defaultContent?.classList.add("hideContainer");
  }

  return (
    <Styled.Container>
      <TitleContainer>Discussões</TitleContainer>
      <CreatedTopic />

      <NewTopic />

      <Styled.ContentContainer className="defaultDiscussionContainer ">
        <Styled.SectionTitle>
          Compartilhe suas ideias ou dúvidas com os autores!
        </Styled.SectionTitle>

        <Styled.IconsContainer>
          <img src={hand} alt="Plante a sua ideia" className="icon" />
          <img src={qea} alt="Perguntas e respostas" className="icon" />
          <img src={people} alt="Compartilhe Ideias" className="icon" />
        </Styled.IconsContainer>

        <p>
          Sabia que o maior estímulo no desenvolvimento científico e cultural é
          a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
        </p>

        <Styled.Button onClick={handleClick}>
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
