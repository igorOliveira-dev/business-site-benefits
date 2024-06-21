import React from "react";
import Begin from "../sections/begin/Begin";
import * as S from "./homeStyle";
import Benefits from "../sections/benefits/Benefits";
import Suggestions from "../sections/suggestions/Suggestions";
import Exemples from "../sections/exemples/Exemples";

const Home = () => {
  return (
    <S.Container>
      <Begin />
      <Benefits />
      <Suggestions />
      <Exemples />
    </S.Container>
  );
};

export default Home;
