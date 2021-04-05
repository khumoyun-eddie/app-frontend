import React from "react";
import classNames from "classnames/bind";
import { PageTemplates, Header, Button } from "../..";
const cx = classNames.bind();
const TradePage = () => {
  return (
    <PageTemplates header={<Header />} responsive>
      <div className={cx("button")}>
        Log In
      </div>
    </PageTemplates>
  );
};

export default TradePage;
