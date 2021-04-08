import React, { Children } from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplates.scss';


const cx = classNames.bind(styles);

const PageTemplates = ({header,children,responsive,padding})=>{
    return(
        <div className={cx('wrapper')}>
            <header>{header}</header>  
            <div className={cx('content',{padding:padding,responsive})}>
            {children}
            </div>
        </div>
    );
};

export default PageTemplates;