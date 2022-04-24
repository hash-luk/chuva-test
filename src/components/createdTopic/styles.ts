import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
`;

export const SendedTopic = styled.h3`
    width: 100%;
    height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ED7839;
    text-align: center;
`

export const Text = styled.p`
    width: 100%;
    height: 20px;
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #595959;
`

export const DiscoverContent = styled.a`
    width: 306px;
    height: 20px;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    text-decoration: underline;
    color: #F48F44;
    cursor: pointer;
`

export const CreateTopic = styled.button`
    width: 235.15px;
    height: 32px;
    background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    color: #FFF;
    border: none;
    cursor: pointer;
`

export const CreatedTopic = styled.div`
    width: 100%;
    height: 148px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 35px 0px;

    .icon {
        width: 30.92px;
        height: 23.22px;
        color: #707070;
    }

    p {
        font-family: "Quicksand", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #707070;
        margin-right: 100px;
    }

    a {
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-decoration: underline;
        color: #ED7839;
    }
`