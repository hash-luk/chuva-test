import * as Styled from "./styles"

const ResponsiveMenu = () => {
    return(
        <Styled.Container>
            <Styled.NavLink>Apresentações</Styled.NavLink>
            <Styled.NavLink>Comitês</Styled.NavLink>
            <Styled.NavLink>Autores</Styled.NavLink>
            <Styled.NavLink>Eixos temáticos</Styled.NavLink>
            <Styled.NavLink>Trabalhos</Styled.NavLink>
            <Styled.NavLink>Contato</Styled.NavLink>
        </Styled.Container>
    )
}

export default ResponsiveMenu;