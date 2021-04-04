import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);
const Button = ()=>{
    return(
        <div className={cx('button')}>
            Hi I am a Button
        </div>
    )
}

export default Button;