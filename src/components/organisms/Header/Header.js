import React, { Children } from "react";
import classNames from "classnames/bind";
import styles from "./Header.scss";
import { Button,Logo, HeaderNav } from "../../../components";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("responsive")}>
        <div className={cx("logo")}>
          <Logo />
        </div>
        <div className={cx('right-side')}>
         <HeaderNav />
         
        </div>
      </div>
    </div>
  );
};

export default Header;
