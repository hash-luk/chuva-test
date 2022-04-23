import styled from "styled-components";


export const Container = styled.div`
    width: 220px;
    height: 100vh;

    
    .selected {
        border: solid;
        border-width: 0 0 0 5px;
        border-image: linear-gradient(180deg, #FFB455 0%, #ED7839 100%);
        border-image-slice: 1;
    }
`;

export const Sidebar = styled.div`
    width: 100%;
    max-height: 536px;
`;

export const Title = styled.div`
    width: 100%;
    height: 68px;
    padding: 0px 22px 0px 20px;
    background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weight: 700;
        color: #FFF;
    }
`;

export const Button = styled.a`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 24px;
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    font-weight:500;
    line-height:19px;
    color: #725C5C;
    cursor: pointer;


`