import styled from "styled-components";

export const Container = styled.section`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (width < 980px) {
    flex-direction: column;
  }
`;

export const EcommerceExemple = styled.div`
  max-width: 600px;
  @media (width < 980px) {
    max-width: 700px;
  }
`;

export const LandingPageExemple = styled.div`
  max-width: 600px;
  @media (width < 980px) {
    max-width: 700px;
  }
`;
