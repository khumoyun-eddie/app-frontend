import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);
const Button = ({children,invert})=>{
    return(
        <div className={cx('button',{
            invert
        })}>
           
           {children}
        </div>
    )
}

export default Button;