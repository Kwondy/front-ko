import React, { Component } from 'react';

import { HomePage, TradePage, RegisterPage, WalletPage, RankingPage, ReportPage, RewardPage, TermsPage, InfoPage } from 'components';
import { Route } from 'react-router-dom';
import { 
  ScreenMaskContainer, 
  LoginModalContainer,
  UserLoader,
  Core
 } from 'containers';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { addLocaleData, IntlProvider } from 'react-intl'; 
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import getLang from '../locale/getLang';
import storage from '../locale/storage';
import * as locale from '../locale'

addLocaleData([...en, ...ko, ...ja]);

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const defaultLang = getLang().split('-')[0];
const storedLang = storage.get('language');

const language = storedLang ? storedLang.lang : 'en';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.location !== this.props.location) {
      logPageView();
    }
  }


  render() {
    return (
  <IntlProvider locale={language} messages={locale[language]}>
      <div>
        <Helmet>
          <title>Coinmarket - Cryptocurrency Exchange</title>
        </Helmet>
        <Route exact path ="/" component={HomePage}/>
        <Route path="/trade" component={TradePage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/wallet" component={WalletPage}/>
        <Route path="/ranking/:type?" component={RankingPage}/>
	<Route path="/info" component={InfoPage}/>
        <Route path="/report/:displayName" component={ReportPage}/>
        <Route path="/reward" component={RewardPage}/>
        <Route path="/terms" component={TermsPage}/>
        <ScreenMaskContainer/>
        <LoginModalContainer/>
        <UserLoader/>
        <Core/>
      </div>
</IntlProvider>

    );
  }
}

export default App;
