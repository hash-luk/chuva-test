import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding-right: 36px;
  height: 55vh;
  margin-left: 220px;
  top: 68px;
  right: 0;
  padding: 20px 36px 4px 36px;

  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "video-content data-content";

  @media screen and (max-width: 768px) {
    width: 100vw;
    margin: 0;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 15px;

    .left-content {
      width: 98%;
      display: flex;
      flex-direction:column;
      gap: 20px;
    }

    .right-content {
      width: 98%;
      display: flex;
    }
  }


  @media screen and (max-width:600px){
    width: 100vw;
    margin: 0;
    padding: 20px 5px 4px 5px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 15px;

    .left-content {
      width: 98%;
      display: flex;
      flex-direction:column;
      gap: 20px;
    }

    .right-content {
      width: 98%;
      display: flex;
    }
  }
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
  padding: 0px 12px;
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
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 25px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #ed7839;
    max-width: 100%;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
    height: 150px;
    align-items: flex-start;

    .buttons-elements {
      height: 100%;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media screen and (max-width:600px){
    width: 50vw;
    height: 150px;
    align-items: flex-start;

    .buttons-elements {
      height: 100%;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const DetailsContainer = styled.div`
  width: 242px;
  height: 439px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  .details-title {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #4e4e4e;
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
    color: #5c5c5c;

    .authors {
      p:first-child {
        margin-bottom: 7px;
      }

      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .index {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: #ada0a0;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
    justify-content: center;
    height: 100%;
  }

  @media screen and (max-width:600px){
    width: 50vw;
    justify-content: center;
    height: 100%;
  }
`;

export const VideoContainer = styled.div`
  width: 784px;
  height: 439px;
  position: relative;

  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(141, 53, 6, 0.5);
  }

  .videocover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

.videocover {
  object-fit: fill;
}
  }

  @media screen and (max-width:600px) {
    width: 100%;

    .videocover {
      object-fit: fill;
    }
  }
`;

export const VideoTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0.05em;
  padding: 0px 0px 0px 32px;
  color: #fff;
  position: absolute;
  top: 35px;
  z-index: 5;
`;

export const VideoInformation = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 17px;
  padding: 0px 0px 0px 31px;
  position: absolute;
  bottom: 60px;
  z-index: 5;

  .outline {
    width: 84px;
    height: 86px;
    border-radius: 50%;
    border: 1px solid #ed7839;
    display: flex;
    align-items: center;
    justify-content: center;

    .photo {
      width: 74px;
      height: 77px;
      border-radius: 50%;
    }
  }

  .texts {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    line-height:25px;
    letter-spacing: 0.05em;

    p:first-child {
        font-size: 34px;
        margin-bottom: 5px;
    }

    p:last-child {
        font-size: 20px;
    }
  }
`;
