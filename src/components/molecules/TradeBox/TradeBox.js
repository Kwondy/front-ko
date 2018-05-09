import React from 'react';
import styles from './TradeBox.scss';
import classNames from 'classnames/bind';
import { Card, HorizontalLabelInput, Button } from 'components';
import { limitDigit } from 'lib/utils';
import { FormattedMessage } from 'react-intl';
import { prepareMessages } from '../../../locale/helper';

const messages = prepareMessages({
	"trade.box.volume" : " Volume",
	"trade.box.fee" : "Fee"	
});

const cx = classNames.bind(styles);

const TradeBox = ({
  title, 
  hasAmount, 
  currencyType, 
  price, 
  amount,
  sell,
  onChange,
  onRefreshPrice,
  onCreateOrder,
  disabled,
  logged
}) => {

  const actionText = sell ? <FormattedMessage id="trade.box.sell" defaultMessage= "Sell"/> : <FormattedMessage id="trade.box.purchase" defaultMessage="Perchase"/>;
  const secondaryCurrency = currencyType === 'BTC' ? 'USD' : 'BTC';
  
  const onCalculate = () => {
    onChange({
      target: {
        name: 'amount',
        value: sell ? hasAmount : parseFloat(hasAmount) / parseFloat(price) / 1.0015
      }
    });
  }

  const inputSetting = {
    type: 'number',
    min: '0',
    inputMode: 'numeric',
  };

  return (
    <Card className={cx('trade-box')}>
      <div className={cx('head')}>
        <div className={cx('title')}>{currencyType} {actionText}</div>
        <div className={cx('has-amount')}><span className={cx('desc')}><FormattedMessage id="trade.box.hold"/>:</span> {limitDigit(hasAmount, 8)} <span className={cx('currency')}>{ sell ? currencyType : secondaryCurrency }</span></div>
      </div>
      <div className={cx('content')}>
        <div className={cx('text-buttons')}>
          <div className={cx('text-button')} onClick={() => onRefreshPrice(sell ? 'sell' : 'buy')}>
	<FormattedMessage id="trade.box.refresh"/>
	</div>
          <div className={cx('text-button')} onClick={onCalculate}><FormattedMessage id="trade.box.maximum"/> {actionText}<FormattedMessage id="trade.box.maximum2"/></div>
        </div>
        <HorizontalLabelInput 
          {...inputSetting} 
          label={<FormattedMessage id="trade.box.price"/> }
          currency={secondaryCurrency} 
          value={price} 
          onChange={onChange}
          name="price"
        />
        <HorizontalLabelInput 
          {...inputSetting} 
          label= {actionText}
          currency={currencyType} 
          value={amount} 
          onChange={onChange}
          name="amount"
        />
      </div>
      <div className={cx('user-area')}>
        {!logged && <div className={cx('dark-layer')}>
          <FormattedMessage id="trade.box.message"/>
        </div>}
        <div className={cx('content', 'bright')}>
          <div className={cx('text')}><FormattedMessage id="trade.box.total"/> {actionText} <FormattedMessage id="trade.box.price"/></div>
          <div className={cx('total')}>
            <div>
            {
              limitDigit(
                sell ? parseFloat(price) * parseFloat(amount) * 0.9985 : parseFloat(price) * parseFloat(amount) * 1.0015
              )
            }
            <span className={cx('base')}>{secondaryCurrency}</span>
            </div>
            <div className={cx('fee')}>
              <b><FormattedMessage id="trade.box.fee"/></b> <span className={cx('value')}>{limitDigit(parseFloat(price) * parseFloat(amount) * 0.0015)} {currencyType === 'BTC' ? 'USD' : 'BTC'}</span>
            </div>
          </div>
        </div>
        <div className={cx('content', 'bright', 'bottom')}>
          <Button flat color="teal" flex onClick={onCreateOrder} disabled={disabled}>{actionText}</Button>
        </div>
      </div>
    </Card>
  );
};

TradeBox.defaultProps = {
  title: 'title',
  hasAmount: 100,
  base: 'BTC',
  currencyType: 'ETH',
  price: 100,
  amount: 100
}

export default TradeBox;