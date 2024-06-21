import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  max-width: 700px;
  @media (width > 1080) {
    max-width: 550px;
  }
`;

export const LogoImg = styled.img`
  height: 70vh;
  transform: rotate(20deg);
  @media (width < 1280px) {
    height: 60vh;
  }
  @media (width < 1080px) {
    display: none;
  }
`;
