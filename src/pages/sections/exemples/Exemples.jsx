import React from "react";
import * as S from "./exemplesStyle";
import * as GS from "../../../styleGlobal";
import { Link } from "react-router-dom";

const Exemples = () => {
  return (
    <div>
      <GS.Title style={{ textAlign: "center" }}>Exemplos</GS.Title>
      <S.Container>
        <S.EcommerceExemple>
          <GS.Paragraph>
            <span>E-commerce:</span> <br />
            Um grande exemplo de e-commerce que temos é o site da Amazon, ele é
            uma boa base para se imaginar como pode ficar o seu prórprio
            e-commerce! <br />
            <Link
              to="https://www.amazon.com.br/"
              onClick={(event) => {
                event.preventDefault();
                window.open(event.target.href, "_blank");
              }}
            >
              https://www.amazon.com.br/
            </Link>
          </GS.Paragraph>
        </S.EcommerceExemple>
        <S.LandingPageExemple>
          <GS.Paragraph>
            <span>Landing page:</span> <br />
            Para a landing page, temos a home do site da coca cola como exemplo,
            pense como seria incrível ter um site como esse com o tema da sua
            empresa! <br />
            <Link
              to="https://www.coca-cola.com.br/"
              onClick={(event) => {
                event.preventDefault();
                window.open(event.target.href, "_blank");
              }}
            >
              https://www.coca-cola.com.br/
            </Link>
          </GS.Paragraph>
        </S.LandingPageExemple>
      </S.Container>
    </div>
  );
};

export default Exemples;
