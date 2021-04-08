import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderNav.scss";
import {Flexbox,NavItem} from '../../atoms/..';

const cx = classNames.bind(styles);
const HeaderNav = () => {
  return (
        <Flexbox row classNames={cx("header-nav")}>
            <NavItem>
                Login
            </NavItem>
            <NavItem>
                Register
            </NavItem>
        </Flexbox>
  );
};
export default HeaderNav;
