import React from "react";
import { PageTemplates, Header, PolyBackground, Block } from "../../";

const HomePage = () => {
  return (
    <PageTemplates header={<Header />}>
      <PolyBackground>
        <Block center shadow  >
          <h1>Legendary cryptoassset exchange</h1>
          <h2>Trade on iCoin</h2>
        </Block>
      </PolyBackground>
    </PageTemplates>
  );
};

export default HomePage;
