import React from 'react';
import classNames from 'classnames/bind';
import styles from './Block.scss';

const cx = classNames.bind(styles);
const Block = ({children,center,shadow})=>{
    return(
        <div className={cx('block',
        {center,shadow})}>           
           {children}
        </div>
    )
}

export default Block;