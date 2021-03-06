import styled from "styled-components";


export const Container = styled.div`
    width: 220px;
    height: 100vh;
    position: absolute;
    top: 0;

    .selected {
        border: solid;
        border-width: 0 0 0 5px;
        border-image: linear-gradient(180deg, #FFB455 0%, #ED7839 100%);
        border-image-slice: 1;
    }

    @media screen and (max-width: 1200px) {
        width: 100vw;
        height: 68px;
        position: fixed;
        display: flex;
        flex-direction: row;
        z-index: 999;

        img {
            display: none;
        }

        .nav-buttons {
            width: 100%;
        }

        .selected {
            border: solid;
            border-width: 5px 0 0 0;
            border-image: linear-gradient(180deg, #FFB455 0%, #ED7839 100%);
            border-image-slice: 1;
        }

        .sidebar-fixed {
            background-color: #FFF;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const Sidebar = styled.div`
    width: 100%;
    max-height: 536px;

    @media screen and (max-width: 1200px) {
        display: flex;
        
        .nav-buttons {
            width: 80%;
            display: flex;
            align-items: center;
            margin-left: 10px;
        }
    }
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

    @media screen and (max-width: 1200px) {
        width: 220px;
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