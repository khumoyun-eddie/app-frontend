import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Logo.scss";

const cx = classNames.bind(styles);
const Logo = () => {
  return (
    <div to="/" classNames={cx("logo")}>
      iCoin
    </div>
  );
};

export default Logo;
