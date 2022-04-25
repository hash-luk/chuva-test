import * as Styled from './styles'
import footer from '../../assets/img/footer.svg'

const Footer = () => {
    function handleClick() {
        window.open("https://galoa.com.br/", "_blank")
    }

    return(
        <Styled.Container onClick={handleClick}>
            <img src={footer} alt="Rodapé da página, logo Galoá a esquerda, texto a direita" />
        </Styled.Container>
    )
}

export default Footer