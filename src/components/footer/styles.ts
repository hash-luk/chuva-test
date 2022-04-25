import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: 181px;
    margin: 50px 0px 0px 220px;
    padding: 0px 46px 0px 14px;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1200px) {
        margin: 50px 0px;
        padding: 10px;
    }

    @media screen and (max-width: 768px) {
        max-width: 95vw;
        margin:0;
        padding:0;
    }

    @media screen and (max-width: 600px) {
        max-width: 95vw;
        margin:0;
        padding:0;
    }
`