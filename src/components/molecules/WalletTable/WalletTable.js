import React from 'react';
import styles from './WalletTable.scss';
import classNames from 'classnames/bind';
import { limitDigit, decimalToPercentString } from 'lib/utils';
import {Link} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const Row = ({
  currency,
  currencyName,
  value,
  valueOnOrder,
  btcValue,
  percentChange,
  hideName
}) => (
  <Link to={`/trade/${currency === 'USD' ? 'BTC' : currency}`}  className={cx('row')}>
    <div className={cx('col', 'coin')}>{currency}</div>
    <div className={cx('col', 'percent')}>{percentChange&&<span className={cx({
      negative: percentChange < 0,
      positive: percentChange > 0
    })}>{percentChange > 0 && '+'}{decimalToPercentString(percentChange)}%</span>}</div>
    { !hideName && <div className={cx('col', 'name')}>{currencyName}</div> }
    <div className={cx('col', 'has')}>{limitDigit(value)}</div>
    <div className={cx('col', 'waiting')}>{limitDigit(valueOnOrder)}</div>
    <div className={cx('col', 'btc')}>{limitDigit(btcValue)}</div>
  </Link>
)

const WalletTable = ({data, hideName}) => {
  if(!data) return null;
  
  const rows = data.map(
    (wallet) => {
      const { currency, currencyName, value, valueOnOrder, last, percentChange } = wallet;
      return (
        <Row
          key={currency}
          currency={currency}
          currencyName={currencyName}
          value={value}
          valueOnOrder={valueOnOrder}
          btcValue={value * last}
          percentChange={percentChange}
          hideName={hideName}
        />      
      )
    }
  )
  return (
    <div className={cx('wallet-table')}>
      <div className={cx('table-head')}>
        <div className={cx('col', 'coin')}>
	<FormattedMessage id="wallet.table.coin"/>
	</div>
        <div className={cx('col', 'percent')}>
	<FormattedMessage id="wallet.table.rate"/>
	</div>
        { !hideName && <div className={cx('col', 'name')}>
	<FormattedMessage id="wallet.table.name"/>
	</div> }
        <div className={cx('col', 'has')}>
	<FormattedMessage id="wallet.table.holding"/>
	</div>
        <div className={cx('col', 'waiting')}>
	<FormattedMessage id="wallet.table.pending"/>
	</div>
        <div className={cx('col', 'btc')}>
	<FormattedMessage id="wallet.table.value"/>
	</div>
      </div>
      <div className={cx('rows')}>
        {rows}
      </div>
    </div>
  );
};

export default WalletTable;