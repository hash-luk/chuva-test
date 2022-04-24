import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 40px;
    padding: 5px 5px;
    display: none;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;

    @media screen and (max-width: 600px) {
        display: flex;
    }
`;

export const NavLink = styled.a`
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    font-weight:500;
    line-height:19px;
    color: #725C5C;
    cursor: pointer;
`;