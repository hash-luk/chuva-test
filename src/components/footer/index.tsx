import * as Styled from './styles'
import footer from '../../assets/img/footer.svg'

const Footer = () => {
    return(
        <Styled.Container>
            <img src={footer} alt="Rodapé da página, logo Galoá a esquerda, texto a direita" />
        </Styled.Container>
    )
}

export default Footer