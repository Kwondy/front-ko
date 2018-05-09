import React from 'react';
import styles from './TradeIndexOptions.scss';
import classNames from 'classnames/bind';
import PinIcon from 'react-icons/lib/ti/pin';

import { Selector, SortReverser, Option, Button } from 'components';

const sorterOptions = [
  {
    name: 'alphabet',
    text: 'Alphabet'
  },
  {
    name: 'percentage',
    text: 'Percentage'
  },
  {
    name: 'price',
    text: 'Price'
  },
  {
    name: 'volume',
    text: 'Volume'
  }
]

const cx = classNames.bind(styles);

const TradeIndexOptions = ({
  sortBy,
  asc,
  showPinned,
  onToggleAsc,
  onSelectSort,
  onAutoPin,
  onToggleShowPinned
}) => {
  return (
    <div className={cx('options')}>
      <div className={cx('left')}>
        <div className={cx('show-pinned')}>
          <Option onClick={onToggleShowPinned} active={showPinned}>
            Pin view
          </Option>
        </div>
        <div className={cx('auto-pin')}>
        <Button flat onClick={onAutoPin} theme="outline">Holding money autopin</Button>
        </div>
      </div>
      <div className={cx('right')}>
        <div className={cx('selector')}><Selector onSelect={onSelectSort} value={sortBy} options={sorterOptions}/></div>
        <div className={cx('reverser')}><SortReverser asc={asc} onToggle={onToggleAsc}/></div>
      </div>
    </div>
  );
};

export default TradeIndexOptions;