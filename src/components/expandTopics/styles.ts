import styled from "styled-components";

export const ImportantContainer = styled.div`
  width: 100%;
  height: 131px;
  padding: 17px 23px 18px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  display: none;

  .content {
    width: 100%;
    height: 131px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .stretch {
    width: 100%;
    height: 95px;
    padding: 0 20px;
  }

  .userComent {
    height: 65px;
    margin-left: 38px;
  }

  .topic--header {
    font-family: 'QuickSand', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: #5C5C5C;
  }

  .type {
    width: 101px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ed7839;
    font-weight: 700;
    font-family: 'Quicksand',sans-serif;
    font-size: 14px;
    line-height: 18px;
  }

  .icon {
    color: #ed7839;
    width: 30.92px;
    height: 21.22px;
  }

  .Autor,
  .Coautor {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .guest {
    .type {
      display: none;
    }
  }

  .topic--content {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    height: 210px;
  }

  @media screen and (max-width: 600px) {
    height: 210px;
  }
`;
