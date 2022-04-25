import * as Styled from './styles'
import heart from '../../assets/icons/heart.svg'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topic = () => {
    function handleLike(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        e.currentTarget.classList.toggle('active')
    }


    return(
        <Styled.Container>
            <div className='topic-title'>
                <Styled.TopicTitle>Assunto da pergunta aparece aqui</Styled.TopicTitle>
                <Styled.Author>Carlos Henrique Santos</Styled.Author>
            </div>
            <div className='content'>
                <Styled.ContentText>
                    Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                </Styled.ContentText>
            </div>
            <Styled.ActionsContainer>
                <FontAwesomeIcon icon={faEllipsisV} className='icon'/>
                <img src={heart} alt="Deixe um like no tópico" className='icon like' onClick={handleLike}/> 
                <p>1 like</p>
                <p>1 resposta</p>
            </Styled.ActionsContainer>
        </Styled.Container>
    )
}

export default Topic