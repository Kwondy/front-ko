import React from 'react';
import { PageTemplate, PolyBackground, BgColor, CoinMain, Card } from 'components';
import {HeaderContainer, CoinMainContainer, SocketSubscriber} from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import IntroQuestionContainer from 'containers/IntroQuestionContainer';
import MoreIcon from 'react-icons/lib/md/more-vert';
import { Link } from 'react-router-dom';
import TrophyIcon from 'react-icons/lib/fa/trophy';
import GithubIcon from 'react-icons/lib/go/mark-github';
import EmailIcon from 'react-icons/lib/md/email';
import { Helmet } from 'react-helmet';
import { FormattedHTMLMessage } from 'react-intl';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <Helmet>
        <title>Coin Market  - Cryptocurrency Exchange </title>
        <meta name="keywords" content="가상화폐, 암호화폐, 모의, 거래, 거래소, 비트코인, 이더리움, BTC, ETH"/>
        <meta name="description" content="Cryptocurrency / Cryptocurrency Exchange Coin Market(Coin market), We are support actually data from poloniex."/>
      </Helmet>
      <SocketSubscriber channel="TICKER"/>
      <PolyBackground home>
        <IntroQuestionContainer/>
      </PolyBackground>
      <BgColor color="#f6f6f6"/>
      <div className={cx('block', 'responsive')}>
        <FormattedHTMLMessage id="home.support"/>
        <CoinMainContainer/>
        <div className={cx('more')}>
          <Link className={cx('more-button')} to="/trade">
            More view to go exchange
          </Link>
        </div>
      </div>
      <div className={cx('third')}>
      </div>
      <div className={cx('footer')}>
        <div className={cx('email')}>
          <EmailIcon/> cadserv@nate.com<br/>
           Tel : 02-832-9337
        </div>
        <div className={cx('copyright')}>
          Copyright © 2017-2018 Coin Market
        </div>
        <div className={cx('copyright')}>
        <Link to="/terms">Privacy Policy</Link>
      </div>
      </div>
    </PageTemplate>
  );
};

export default HomePage;