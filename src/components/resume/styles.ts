import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    right: 0;
    margin-left: 220px;
    padding: 20px 36px 4px 36px;

    p {
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #5C5C5C;

        span {
            color: #ED7839;
            line-height: 22.75px;
            font-weight: 700;
            display: none;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1200px) {
        margin: 50px 0px;
    }

    @media screen and (max-width: 768px) {
        margin:0;
        width: 100%;
        margin-top: 60px;
        padding: 5px 5px;
    }

    @media screen and (max-width: 600px) {
        margin:0;
        width: 100%;
        margin-top: 50px;
        padding: 5px 5px;
    }
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 45px;
    padding-left:15px;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-weight:500;
    font-size:20px;
    line-height: 25px;
    color:#4E4E4E;
`

export const TextsContainer = styled.div`
    width: 100%;
    max-height: 485px;
    padding: 0px 15px;

    p {
        width: 100%;
        word-wrap: break-word;
        white-space:pre-line;
    }

    .additional-content {
        display: none;
    }

    .show {
        display: block !important;
    }

    .hidden {
        display: none !important;
    }

    @media screen and (max-width: 768px) {
        max-height: 10000px;
    }

    @media screen and (max-width: 600px) {
        max-height: 10000px;
    }
`