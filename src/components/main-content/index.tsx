import * as Styled from './styles'
import { faDownload,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doiIcon from '../../assets/icons/doi.svg'

const Main = () => {
    return(
        <Styled.Container>
            <div className='left-content'>
                <Styled.Title>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </Styled.Title>
                <div style={{width: "784px",height:"439px",border:"1px solid red"}}></div>
            </div>
            <div className="right-content">
                <Styled.ButtonsContainer>
                    <div className="buttons-elements">
                        <Styled.Button className='download'><FontAwesomeIcon icon={faDownload} inverse  className='icon'/> Download</Styled.Button>
                        <Styled.Button><FontAwesomeIcon icon={faStar} inverse  className='icon'/></Styled.Button>
                        <Styled.Button> <img src={doiIcon} alt="Doi Icon" className='icon'/> </Styled.Button>
                    </div>
                    <p>COMO CITAR ESSE TRABALHO?</p>
                </Styled.ButtonsContainer>
                <Styled.DetailsContainer>
                    <p className='details-title'>Detalhes</p>
                    <div className="details-content">
                       <p><span>Tipo Apresentação: </span> <b>Pôster</b></p>
                       <p><span>Eixo temático: </span><b>Alimentação e saúde(AS)</b>  </p>
                       <p><span>Palavras-chaves: </span><b>Alimentos funcionais, alimentação escolar.</b> </p>

                       <br />

                       <div className='authors'>
                           <p><b>Autores:</b></p>
                           <p>Galileo Galilei¹</p>
                           <p>Berta Lange de Morretes²</p>
                           <p>Isaac Newton³</p>
                           <p>Cesar Lattes¹</p>
                           <p>Stephen Hawking⁴</p>
                       </div>

                       <br />

                       <div className="index">
                           <p>¹Universidade Estadual de Campinas</p>
                           <p>²Universidade de São Paulo</p>
                           <p>³Instituto Nacional de Pesquisas Espaciais</p>
                           <p>⁴Universidade Federal do Rio de Janeiro</p>
                       </div>
                    </div>
                </Styled.DetailsContainer>
            </div>

        </Styled.Container>
    )
}

export default Main;
