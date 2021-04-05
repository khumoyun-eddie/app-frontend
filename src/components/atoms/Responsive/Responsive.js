import React, { Children } from 'react';
import classNames from 'classnames/bind';
import styles from './Responsive.scss';

const cx = classNames.bind(styles);

const Responsive = ()=>{
    return(
       <div className={cx('responsive')}></div>
    );
};

export default Responsive;