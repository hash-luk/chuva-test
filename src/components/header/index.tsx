import * as Styled from "./styles";
import { faGlobe,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
    return(
        <Styled.Container>
            <Styled.LeftTexts>
                <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                <p className="main-title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                <p>ISSN: 1234-5678</p>
            </Styled.LeftTexts>
            <Styled.RightContent>
                <Styled.SelectInput>
                    <option value="PT,BR"><FontAwesomeIcon icon={faGlobe}/>PT,BR</option>
                    <option value="EN,US"><FontAwesomeIcon icon={faGlobe}/>EN,US</option>
                </Styled.SelectInput>
                <Styled.UserInfo>
                    <div className="texts">
                        <p>Bem Vindo</p>
                        <p>alguem12@galoascience.com</p>
                    </div>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="icon"/>
                </Styled.UserInfo>
            </Styled.RightContent>
        </Styled.Container>
    )
}

export default Header;