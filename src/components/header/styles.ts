import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 68px;
    padding: 5px 36px 4px 36px;
    margin-left: 220px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        margin:0;
        width: 100vw;
        padding: 5px 5px
    }
`;

export const LeftTexts = styled.div`
    width: 643px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    color: #725C5C;
    font-weight: 400;

    p:first-child, p:last-child {
        line-height: 16px;
    }

    .main-title {
        font-size: 22px;
        line-height: 26px;
    }

    @media screen and (max-width: 600px) {
        .main-title {
            font-size: 18px;
            line-height: 22px;
        }
    }
`

export const RightContent = styled.div`
    width: 400px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Quicksand', sans-serif;
    gap: 22px;

    @media screen and (max-width: 600px) {
        display: none;
        width: 100%;
    }
`

export const SelectInput = styled.select`
    width: 94px;
    height: 100%;
    background-color: #C4C4C4;
    border: 1px solid #CCCCCC;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    color: #333333;
`

export const UserInfo = styled.div`
    max-width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.85px;
    text-align: right;

    .texts {
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`