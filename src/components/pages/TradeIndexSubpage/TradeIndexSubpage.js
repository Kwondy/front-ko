import React from 'react';
import styles from './TradeIndexSubpage.scss';
import classNames from 'classnames/bind';
import { TradeIndexContainer, TradeIndexOptionsContainer } from 'containers';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

const TradeIndexSubpage = () => {
  return (
    <div className={cx('trade-index-subpage')}>
      <Helmet>
        <title>Exchange :: Coin Market</title>
        <meta name="description" content="Check the virtual currency aggregate price"/>
      </Helmet>
      <TradeIndexOptionsContainer/>
      <TradeIndexContainer/>
    </div>
  );
};

export default TradeIndexSubpage;