import React from 'react';
import styles from './WalletSubpage.scss';
import classNames from 'classnames/bind';
import { Wallets } from 'components';
import { WalletsContainer } from 'containers';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const WalletSubpage = () => {
  return (
    <section className={cx('wallet-subpage')}>
      <h1>
        <FormattedMessage id="wallet.subpage.title"/>
      </h1>
      <WalletsContainer/>
    </section>
  );
};

export default WalletSubpage;