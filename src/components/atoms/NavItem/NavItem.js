import React from "react";
import classNames from "classnames/bind";
import styles from "./NavItem.scss";

const cx = classNames.bind(styles);

const NavItem = ({children}) => {
  return (
    <div className={cx("nav-item")}>
      {children}
    </div>
  );
};

export default NavItem;