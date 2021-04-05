import React from 'react';
import classNames from 'classnames/bind';
// import {Route} from 'react-router-dom';
// import {HomePage} from '../../../components';
import styles from './Logo.scss';

const cx = classNames.bind(styles);
const Logo = ()=>{
    return(
        <div classNames = {cx('logo')}>
            {/* <Route path = '/' component={HomePage} /> */}
            iCoin
        </div>
    );
};

export default Logo;