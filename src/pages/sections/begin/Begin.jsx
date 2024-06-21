import React from "react";
import * as S from "./beginStyle";
import * as GS from "../../../styleGlobal";
import logo from "/logoPNG.png";

const Begin = () => {
  return (
    <div>
      <S.Container>
        <S.LeftContainer>
          <GS.Title>
            Por que a sua empresa <br /> <span>precisa</span> de um site?
          </GS.Title>
          <GS.Paragraph>
            Me diga, qual é o primeiro lugar que você busca por algo que você
            quer?
          </GS.Paragraph>
          <GS.Paragraph>
            Atualmente, praticamente todas as pessoas buscam o que precisam pela
            internet, isso faz com que empresas com uma forte presença online
            acabem saindo muito na frente das demais.
          </GS.Paragraph>
          <GS.Paragraph>
            Empresas que possuem um site tem uma visibilidade bem maior e um
            excelente meio de divulgar seus serviços, conectar-se a clientes,
            vender seus produtos online e várias outras vantegens.
          </GS.Paragraph>
        </S.LeftContainer>
        <S.LogoImg src={logo} />
      </S.Container>
    </div>
  );
};

export default Begin;
