import React from 'react';
import styles from './RankingPage.scss';
import classNames from 'classnames/bind';
import { PageTemplate, Card, PolyBackground, ResponsiveAd } from 'components';
import { HeaderContainer, RankingContainer } from 'containers';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const RankingPage = ({match}) => {
  const { type } = match.params;

  return (
    <PageTemplate header={<HeaderContainer solid/>} padding>
      <Helmet>
        <title>Ranking :: Coin Market</title>
        <meta name="description" content="Profitability Ranking from Users"/>
      </Helmet>
      <div className={cx('block')}>
      </div>
      <Card className={cx('ranking-box')}>
        <div className={cx('ads-area')}>
          <ResponsiveAd/>
        </div>
        <h1><FormattedMessage id="ranking.page.title"/></h1>
        <div className={cx('description')}>
          <FormattedMessage id="ranking.page.des1"/>
          <br/><FormattedMessage id="ranking.page.des2"/>
          <br/>
          <br/><FormattedMessage id="ranking.page.des3"/>
        </div>
        <hr/>
        <div className={cx('type-selector')}>
          <Link to="/ranking/monthly" className={cx('type', {
            active: !type || type === 'monthly'
          })}>
            <FormattedMessage id="ranking.page.monthly"/>
          </Link>
          <Link to="/ranking/total" className={cx('type', {
            active: type === 'total'
          })}>
            <FormattedMessage id="ranking.page.all"/>
          </Link>
        </div>
        <RankingContainer type={type}/>
      </Card>
    </PageTemplate>
  );
}

export default RankingPage;