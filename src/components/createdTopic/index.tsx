import * as Styled from './styles'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatedTopic = () => {
    return(
        <Styled.Container>
            <Styled.SendedTopic>Seu tópico foi enviado com sucesso! :D</Styled.SendedTopic>
            <Styled.Text>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</Styled.Text>
            <Styled.DiscoverContent>Descubra outros trabalhos!</Styled.DiscoverContent>
            <Styled.CreateTopic>criar novo tópico</Styled.CreateTopic>
            <Styled.CreatedTopic>
                <FontAwesomeIcon icon={faCheckDouble} className="icon"/>
                <p>Aguardando feedback dos autores</p>
                <a href="#">Editar tópico</a>
            </Styled.CreatedTopic>
        </Styled.Container>
    )
}

export default CreatedTopic;