import styled from "styled-components";

export const Title = styled.h1`
  font-size: 35px;
  color: #fdfdfd;
  margin-bottom: 20px;
  margin-inline: 20px;
  & > span {
    color: #00b2ff;
  }
`;

export const Paragraph = styled.p`
  color: #ddd;
  font-size: 23px;
  max-width: 700px;
  margin-bottom: 10px;
  margin-inline: 20px;
  & > span {
    font-weight: bolder;
    color: #fdfdfd;
  }
`;
