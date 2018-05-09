import React from 'react';
import styles from './InfoPage.scss';
import classNames from 'classnames/bind';
import { PageTemplate, Card, PolyBackground, ResponsiveAd } from 'components';
import { HeaderContainer, RankingContainer } from 'containers';
import logo from 'static/images/logo_big.png';
import secure from 'static/images/secure.png';
import extend from 'static/images/extend.png';
import connect from 'static/images/connect.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; 
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);
const InfoPage = ({match}) => {
  const { type } = match.params;
  return (
    <PageTemplate header={<HeaderContainer solid/>} padding>
      <Helmet>
        <title>Info :: Coin Market </title>
        <meta name="description" content="Coin Market info"/>
      </Helmet>
      <div className={cx('block')}>
      </div>
      <Card className={cx('ranking-box')}>
        <div className={cx('ads-area')}>
          <ResponsiveAd/>
        </div>
        <h1><FormattedMessage id="info.page.title"/></h1>
    
        <hr/>
        	<div className={cx('info')}>
		<div className={cx('info-img')}>
		<img className={cx('logo')} src={logo} alt="logo" />
		</div>
		<div className={cx('info-text')}>
			<h3><FormattedMessage id="info.page.con1"/></h3>
            			<p><FormattedMessage id="info.page.des1"/></p>
            			<p><FormattedMessage id="info.page.des2"/></p>
            			<p><FormattedMessage id="info.page.des3"/></p>
		</div>
		<div className={cx('info-img')}>
		<img className={cx('secure')} src={secure} alt="secure"/>
		</div>
		<div className={cx('info-text')}>
			<h3><FormattedMessage id="info.page.con2"/></h3>
            			<p><FormattedMessage id="info.page.des4"/></p>
            			<p><FormattedMessage id="info.page.des5"/></p>
            			<p><FormattedMessage id="info.page.des6"/></p>
				<p><FormattedMessage id="info.page.des7"/></p>
		</div>
		<div className={cx('info-img')}>
		<img className={cx('extend')} src={extend} alt="extend"/>
		</div>
		<div className={cx('info-text')}>
			<h3><FormattedMessage id="info.page.con3"/></h3>
            			<p><FormattedMessage id="info.page.des8"/></p>
            			<p><FormattedMessage id="info.page.des9"/></p>
            			<p><FormattedMessage id="info.page.des10"/></p>
		</div>
		<div className={cx('info-img')}>
		<img className={cx('connect')} src={connect} alt="connect" />
		</div>
		<div className={cx('info-text')}>
			<h3><FormattedMessage id="info.page.con4"/></h3>
            			<p><FormattedMessage id="info.page.des11"/></p>
				<p><FormattedMessage id="info.page.des12"/></p>
            			<p><FormattedMessage id="info.page.des13"/></p>
            		</div>
	</div>
      </Card>
    </PageTemplate>
  );
}
export default InfoPage;
