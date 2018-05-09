import React from 'react';
import styles from './IntroQuestion.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IntroQuestion = ({onClick}) => (
  <div className={cx('question')}>          
  <div>
    <h1>
     <b> Coin Market</b><br/>
   
      Exchange The World 
      </h1>
    <p>
      Exchange data come from Poloniex       
    </p>
  </div>
  <div className={cx('button')} onClick={onClick}>
    Go Exchange
  </div>
   <div className={cx('button')}>
      <a href="http://sotong.gq/price">Go Price</a>
  </div>
</div>
);

export default IntroQuestion;