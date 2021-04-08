import React from "react";
import { PageTemplates, Header, PolyBackground, Block } from "../../";
import Typical from "react-typical";

const HomePage = () => {
  return (
    <PageTemplates header={<Header />}>
      <PolyBackground>
        <Block center>
          <Typical
            steps={["Legendary cryptoasset exchange", 2000, "Trade in iCoin", 500]}
            loop={Infinity}
            wrapper="h1"
          />
        </Block>
      </PolyBackground>
    </PageTemplates>
  );
};

export default HomePage;
