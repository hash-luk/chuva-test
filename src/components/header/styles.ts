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

    @media screen and (max-width: 1200px) {
        margin: 90px 0px 0px 0px
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        margin:0;
        padding: 10px 5px;
    }

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

    @media screen and (max-width: 768px) {
        .main-title {
            font-size: 18px;
            line-height: 22px;
        }
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

    @media screen and (max-width: 768px) {
        width: 100px;
    }


    @media screen and (max-width: 600px) {
        display: flex;
        width: 100px;
    }
`

export const SelectInput = styled.select`
    width: 97px;
    height: 100%;
    background-color: #C4C4C4;
    border: 1px solid #CCCCCC;
    font-family: 'Quicksand','FontAwesome', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    color: #333333;
    background:url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
    background-position: calc(100% - 0.20rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    padding-left: 5px;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
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

    @media screen and (max-width: 768px) {
        .texts {
            display: none;
        }

        .icon {
            margin-left: 50px;
        }
    }

    @media screen and (max-width: 600px) {
        .texts {
            display: none;
        }
    }
`