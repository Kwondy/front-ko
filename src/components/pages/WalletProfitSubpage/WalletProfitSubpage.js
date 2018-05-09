import React from 'react';
import styles from './WalletProfitSubpage.scss';
import classNames from 'classnames/bind';
import { Profit } from 'containers';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const WalletProfitSubpage = () => (
  <section className={cx('wallet-profit-subpage')}>
    <h1>
      <FormattedMessage id="wallet.subpage.profit"/>
    </h1>
    <div className={cx('profit-wrapper')}>
      <Profit/>
    </div>
  </section>
);

export default WalletProfitSubpage;