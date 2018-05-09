import React from 'react';
import styles from './Wallets.scss';
import classNames from 'classnames/bind';
import { TripleWallet, WalletTable } from 'components';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const Wallets = ({
  sum,
  krwRate,
  btcMultiplier,
  walletData,
  hideName
}) => (
  <div className={cx('wallets')}>
    <section>
      <h2>
        <FormattedMessage id="wallets.total"/>
      </h2>
      <TripleWallet
        btc={sum}
        usd={sum * btcMultiplier}
        krw={sum * btcMultiplier * krwRate}
      />
    </section>
    <section>
      <h2><FormattedMessage id="wallets.wallet"/></h2>
      <WalletTable data={walletData} hideName={hideName}/>
    </section>
  </div>
);

export default Wallets;