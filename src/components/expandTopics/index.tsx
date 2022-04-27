import * as Styled from "./styles";
import { Author, ContentText } from "../topics/styles";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TopicsProps = {
  user: string;
  answer: string;
  userType: string;
  contentType: string;
};

const ExpandTopics = (props: TopicsProps) => {
  return (
    <Styled.ImportantContainer className="expandedTopics">
      <div className={`content ${props.contentType}`}>
        <Author className={`topic--header ${props.userType}`}>
          {props.user}
          <p className="type">
            <p>{props.userType}</p>
            <FontAwesomeIcon icon={faCheckDouble} className="icon" />
          </p>
        </Author>
        <ContentText className="topic--content">{props.answer}</ContentText>
      </div>
    </Styled.ImportantContainer>
  );
};

export default ExpandTopics;
