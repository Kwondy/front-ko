import React from 'react';
import styles from './WalletHistorySubpage.scss';
import classNames from 'classnames/bind';
import { WalletHistories } from 'containers';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const WalletHistorySubpage = () => (
  <div className={cx('wallet-history-subpage')}>
    <h1><FormattedMessage id="wallet.subpage.history"/></h1>
    <WalletHistories/>
  </div>
);

export default WalletHistorySubpage;