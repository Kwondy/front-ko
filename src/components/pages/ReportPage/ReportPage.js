import React from 'react';
import styles from './ReportPage.scss';
import classNames from 'classnames/bind';
import { PageTemplate, Card } from 'components';
import { HeaderContainer, ReportContainer, SocketSubscriber } from 'containers';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const ReportPage = ({match}) => {
  const { displayName } = match.params;

  return (
    <PageTemplate header={<HeaderContainer solid/>} padding>
      <Helmet>
        <title>{`${displayName}'s report :: Coin Market`}</title>
        <meta name="description" content={`${displayName}'s cryptocurrency exchange report`}/>
      </Helmet>
      <div className={cx('block')}>
      </div>
      <Card className={cx('ranking-box')}>
        <h1>{displayName}<FormattedMessage id="report.page.report"/></h1>
        <hr/>
        <ReportContainer displayName={displayName}/>
      </Card>
      <SocketSubscriber channel="TICKER"/>
    </PageTemplate>
  );
}

export default ReportPage;