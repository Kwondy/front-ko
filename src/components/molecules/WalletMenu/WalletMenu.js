import React from 'react';
import styles from './WalletMenu.scss';
import classNames from 'classnames/bind';
import { Card, ResponsiveAd } from 'components';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);


const WalletMenu = () => {
  return (
    <Card className={cx('wallet-menu')} noPadding>
      <NavLink activeClassName={cx('active')} exact to="/wallet">
	<FormattedMessage id="wallet.menu.wallet"/>
	</NavLink>
      <NavLink activeClassName={cx('active')} to="/wallet/history">
	<FormattedMessage id="wallet.menu.history"/>
	</NavLink>
      <NavLink activeClassName={cx('active')} to="/wallet/profit">
	<FormattedMessage id="wallet.menu.profit"/>
	</NavLink>
      <div className={cx('ad-area')}>
        <ResponsiveAd/>
      </div>
    </Card>
  );
};

export default WalletMenu;