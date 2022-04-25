import * as Styled from './styles'
import heart from '../../assets/icons/heart.svg'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Topic = () => {
    const [likes,setLikes] = useState(1)

    function handleLike(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        e.currentTarget.classList.toggle('active')

        if(e.currentTarget.classList.contains('active')){
            setLikes(likes + 1)
        } else {
            setLikes(likes - 1)
        }
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
                <p className='likes'>{likes} likes</p>
                <p>1 resposta</p>
            </Styled.ActionsContainer>
        </Styled.Container>
    )
}

export default Topic