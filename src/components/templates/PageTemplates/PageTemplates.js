import React, { Children } from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplates.scss';

const cx = classNames.bind(styles);

const PageTemplates = ({header,children,responsive})=>{
    return(
        <div className={cx('wrapper')}>
            <header>
                {header}
            </header>   
            <div className={cx('content',{'has-header':responsive})}>
            {children}
            </div>
        </div>
    );
};

export default PageTemplates;