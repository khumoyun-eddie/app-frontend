import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderNav.scss";
import {Button,Flexbox,NavItem} from '../../atoms/..';

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
            <Button invert>Click</Button>
        </Flexbox>
  );
};
export default HeaderNav;
