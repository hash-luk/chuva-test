import styled from "styled-components";

export const Container = styled.div`
    width: 1028px;
    height: 148px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding:17px 23px 18px 24px;
    margin-bottom: 17px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 180px;
        padding: 10px 23px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 180px;
    }
`

export const TopicTitle = styled.p`
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ED7839;
`

export const Author = styled.p`
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #5C5C5C;
`

export const ContentText = styled.p`
    width: 100%;
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #4D4D4D;
`

export const ActionsContainer = styled.div`
    width: 165px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        height: 18px;
        cursor: pointer;
    }

    .icon:first-child {
        color: #ED7839;
    }
    
    .icon:last-child {
        width: 17px;
    }
    p {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: #757575;
    }
`