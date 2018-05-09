import React from 'react';
import styles from './Ranking.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const RankItem = ({displayName, profit, rankNumber}) => {

  const percentage = Math.round(profit * 10000) / 100;
  
  return (
    <Link className={cx('rank-item')} to={`/report/${displayName}`}>
      <div className={cx('num')}>
        {rankNumber}<FormattedMessage id="rank.rank"/>
      </div>
      <div className={cx('username')}>
        {displayName}
      </div>
      <div className={cx('profit', profit >= 0 ? 'positive' : 'negative')}>
        {profit > 0 && '+'}{percentage}%
      </div>
    </Link>
  )
}

const Ranking = ({data, count, monthly, me}) => {

  const rankList = data.map(
    (rank, i) => {
      const { displayName, earningsRatio, monthlyRatio } = rank.toJS();

      return (
        <RankItem 
          displayName={displayName} 
          profit={earningsRatio !== undefined ? earningsRatio : monthlyRatio}
          key={displayName}
          rankNumber={i+1}
        />
      );
    }
  )
  return (
    <div className={cx('ranking')}>
      <div className={cx('rank-meta')}>
        <b>The number of traders:</b> {count}people
      </div>
      { me && <div className={cx('rank-meta')}>
        <b>My ranking:</b> {me}rank <span className={cx('mini')}>(Top {(Math.round(me / count * 10000) / 100).toFixed(2)}%)</span>
      </div> }
      <div className={cx('ranking-list')}>
        <div className={cx('row-desc')}>
          <div className={cx('num')}>
		<FormattedMessage id="rank.ranking"/>
	</div>
          <div className={cx('username')}>
		<FormattedMessage id="rank.nickname"/>
	</div>
          <div className={cx('profit')}>
		<FormattedMessage id="rank.profit"/>
	</div>
        </div>
        {rankList}
      </div>
    </div>
  )
}

export default Ranking;