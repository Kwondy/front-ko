import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
//import logo from 'static/images/a.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <Link to="/" className={cx('logo')}>
      Coin Market
    </Link>
  );
};

export default Logo;
