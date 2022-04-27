import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: fit-content;
    right: 0;
    margin-left: 220px;
    padding: 20px 36px 4px 36px;

    .hideContainer {
        display: none;
    }

    .showContainer {
        display: flex;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        width: 98%;
        margin: 0;
        padding: 5px 0px;
    }



    @media screen and (max-width: 600px) {
        width: 98%;
        margin: 0;
        padding: 5px 0px;
    }
`

export const ContentContainer = styled.div`
    max-width: 626px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 15px 0px;

    p {
        width: 100%;
        height: 39px;
        text-align: center;
        font-family: "Quicksand", sans-serif;
        font-size: 14px;
        line-height:19px;
        font-weight:400;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        p {
            font-size: 12px;
        }
    }
`

export const SectionTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ED7839;
`

export const IconsContainer = styled.div`
    width: 100%;
    height: 48.94px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 51.74px;

    .icon {
        width: 50.26px;
        height: 100%;
    }
`

export const Button = styled.button`
    width: 133px;
    height: 32px;
    color: #FFF;
    background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    font-family: "Quicksand", sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 16px;

    .faIcon {
        width: 17px !important;
        height: 17px !important;
    }
`