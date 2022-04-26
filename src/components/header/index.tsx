import * as Styled from "./styles";
import { faUserCircle, faGlobe} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState,useEffect} from "react";


const Header = () => {;

    const [notifications, setNotifications] = useState(2);


    useEffect(() => {
        const interval = setInterval(() => {
            setNotifications(notifications + 1);
        },5000);

        if(notifications > 9) {
            setNotifications(0);
        }

        return () => clearInterval(interval);
    },[notifications])

    function handleClick() {
        const secondOption = document.querySelector(".secondOption");


        secondOption?.classList.toggle("show");
    }



    return(
        <Styled.Container>
            <Styled.LeftTexts>
                <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                <p className="main-title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                <p>ISSN: 1234-5678</p>
            </Styled.LeftTexts>
            <Styled.RightContent>
                <Styled.SelectInputContainer>
                    <Styled.SelectInput type="text" name="language" />
                    <Styled.InputLabel htmlFor="language" onClick={handleClick}><FontAwesomeIcon icon={faGlobe} />PT,BR</Styled.InputLabel>
                    <Styled.InputLabel htmlFor="language" className="secondOption"><FontAwesomeIcon icon={faGlobe} />EN,US</Styled.InputLabel>
                </Styled.SelectInputContainer>
                <Styled.UserInfo>
                    <div className="texts">
                        <p>Bem Vindo</p>
                        <p>alguem12@galoascience.com</p>
                    </div>
                    <div className="notification">{notifications}</div>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="icon" />
                </Styled.UserInfo>
            </Styled.RightContent>
        </Styled.Container>
    )
}

export default Header;