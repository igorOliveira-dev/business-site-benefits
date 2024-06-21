import React from "react";
import * as S from "./suggestionsStyle";
import * as GS from "../../../styleGlobal";

const Suggestions = () => {
  return (
    <div>
      <S.Container>
        <GS.Title>Sugestões</GS.Title>
        <GS.Paragraph>
          Dependendo do seu negócio você pode precisar de diferentes tipos de
          sites, aqui estão alguns deles e em que eles podem te ajudar:
        </GS.Paragraph>
        <GS.Paragraph>
          <span>E-commerce:</span> Os e-commerces são lojas virtuais que
          permitem a venda de produtos ou serviços de maneira online, podendo
          integrar sistemas de pagamento, gerenciamento de estoque, carrinho,
          administração de pedidos, e outras funcionalidades.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Blogs e sites de conteúdo:</span> Esses tipos de site são ótimos
          para compartilhar informações, notícias, novidades e qualquer outra
          coisa sobre a sua empresa de forma 100% personalisável, atraente e
          persuasivel ao cliente.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Landing pages:</span> As landing pages são geralmente páginas
          que apresentam o cliente à empresa, ele pode exibir todas as
          informações da empresa e ser muito atrativo para o cliente, além de
          mostrar o profissionalismo e a preocupação com a presença online da
          empresa.
        </GS.Paragraph>
        <GS.Paragraph>
          Essas são algumas ideias de como a sua empresa pode se atualizar e
          melhorar o desempenho com sites, porém existem diversas outras
          possibilidades e qualquer ideia brilhante que você tenha, pode ser
          transformada em site com a ajuda de um programador qualificado, isso
          com certeza vai melhorar a visibilidade da sua empresa e fazê-la
          crescer cada vez mais e mais!
        </GS.Paragraph>
      </S.Container>
    </div>
  );
};

export default Suggestions;
