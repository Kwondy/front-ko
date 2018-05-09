import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';
import { FormattedMessage } from 'react-intl';
import america from 'static/images/america.png';
import korea from 'static/images/korea.png';

const cx = classNames.bind(styles);

const HeaderNav = ({logged}) => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="/trade">
        <FormattedMessage id="nav.exchange"/>
      </NavItem>
      {logged && <NavItem to="/wallet">
        <FormattedMessage id="nav.payment"/>
      </NavItem> }
      <NavItem to="/ranking">
        <FormattedMessage id="nav.ranking"/>
      </NavItem>
      <NavItem to="/info">
	<FormattedMessage id="nav.info"/>
      </NavItem>
         <a href="https://coinmarket.or.kr"><img className={cx('header-img')} src={america} alt="en" /></a>
         <a href="https://ko.coinmarket.or.kr"><img className={cx('header-img')} src={korea} alt="ko" /></a>
    </FlexBox>
  );
};

export default HeaderNav;
