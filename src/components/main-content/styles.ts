import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  max-width: 100%;
  padding-right: 36px;
  height: 80vh;
  left: 220px;
  top: 68px;
  right: 0;
  padding: 20px 36px 4px 36px;

  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "video-content data-content";
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 25px;
  color: #ed7839;
  letter-spacing: 0.05em;
  max-width: 768px;
  height: 54px;
  margin-bottom: 19px;
`;

export const Button = styled.button`
  width: 43px;
  height: 31px;
  background-color: #ed7839;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #000000;
  padding:0px 12px;
  cursor: pointer;

  .icon {
      width: 19px !important;
      height: 19px !important;
  }
`;


export const ButtonsContainer = styled.div`
    width: 239px;
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 12px;

    .buttons-elements {
        width: 93%;
        height: 31px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .download {
      width: 120px;
      height: 31px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size:14px;
      line-height: 19px;
      color: #FFFFFF;
  }

  p {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 25px;
      font-weight: 500;
      letter-spacing:0.05em;
      color: #ED7839;
      max-width: 100%;
      margin-bottom: 5px;
  }
`

export const DetailsContainer = styled.div`
    width: 242px;
    height: 439px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    .details-title {
        font-family: "Roboto", sans-serif;
        font-weight:500;
        font-size: 20px;
        line-height: 25px;
        color: #4E4E4E;
    }

    .details-content {
        width: 100%;
        height: 364px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: 0.02em;
        color: #5C5C5C;


        .authors {
            p:first-child {
                margin-bottom:7px;
            }

            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .index {
            display: flex;
            flex-direction: column;
            gap: 2px;
            color: #ADA0A0;
        }
    }

`