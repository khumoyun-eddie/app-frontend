import React from "react";
import classNames from "classnames/bind";
import styles from "./Flexbox.scss";

const cx = classNames.bind(styles);

const Flexbox = ({row,column,className,children,...rest}) => {
  return (
    <div className={cx('flex-box',{
        row,
        column,
    },className)}
    {...rest}>
     {children}
    </div>
  );
};

export default Flexbox;
