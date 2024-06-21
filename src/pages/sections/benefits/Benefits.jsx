import React from "react";
import * as S from "./benefitsStyle";
import * as GS from "../../../styleGlobal";

const Benefits = () => {
  return (
    <div>
      <S.Container>
        <GS.Title>Benefícios</GS.Title>
        <GS.Paragraph>
          Um site para uma empresa tem muitos benefícios, alguns deles são:
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Primeira conexão com os clientes:</span> Um site pode funcionar
          muito bem como primeiro contato com o cliente ao seu negócio. Muitos
          consumidores pesquisam informações como endereço, telefone e produtos
          em sites antes mesmo de visitar a loja física, ter uma presença em
          forma de site pode já conquistar o cliente nesse primeiro contato.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Fortalecimento da marca:</span> Com um site você reforça a
          presença da sua marca, ele carrega a identidade do seu negócio e
          permite que você seja visto da maneira que deseja pelos consumidores.
          Pense em como você gostaria de ser percebido pelos seus clientes e
          cause uma ótima impressão.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Presença online 24 horas:</span> Com um site você pode ter um
          meio de se comunicar com o cliente 24 horas por dia, você pode deixar
          perguntas frequentes lá, deixar todas as informações atualizadas da
          loja, e até mesmo incrementar um sistema de pedidos online, assim o
          atendimento feito por outras redes pode nem ser mais necessário.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Aumento das vendas: </span> Um site bem projetado pode atrair
          mais clientes e ferar mais vendas, além de ser possivel integrar
          ferramentas de e-commerce para vender produtos diretamente online, o
          que é muitas vezes preferidos pelos usuários.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Credibilidade e confiança:</span> É inegável que uma empresa que
          possui um site transmite um profissionalismo e confiabilidade maior,
          os clientes confiam mais em empresas com presença online forte pois
          isso mostra um grande comprometimento com os clientes.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Redução de custos com publicidade:</span> O site é um ótimo meio
          de publicidade, investir nele é mais econômico a longo prazo do que
          depender de anúncios pagos em outras mídias.
        </GS.Paragraph>
        <GS.Paragraph>
          <span>Mensuração de resultados:</span> Com um site, você pode
          acompanhar algumas estatísticas como visitantes, conversações e
          comportamento do usuário, isso permite ajustar sua estratégia de
          mercado e tomar decisões precisamente informadas.
        </GS.Paragraph>
      </S.Container>
    </div>
  );
};

export default Benefits;
