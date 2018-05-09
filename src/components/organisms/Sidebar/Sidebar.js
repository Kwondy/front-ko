import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import { SidebarWrapper, Button } from 'components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import america from 'static/images/america.png';
import korea from 'static/images/korea.png';

const cx = classNames.bind(styles);

const MenuItem = ({ to, children, onClick}) => {
  return (<Link onClick={onClick} className={cx('menu-item')} to={to}>{children}</Link>)
}

const Sidebar = ({
  visible,
  user,
  onLoginClick,
  onClose,
  onLogout
}) => (
  <SidebarWrapper visible={visible}>
    <div className={cx('upper-block')}>
      {
        user ? [
          <div className={cx('message')} key={0}>
            <b>{user.get('displayName')}</b><br/> <FormattedMessage id="sidebar.hello"/>
          </div>,
          <Button key={1} className={cx('sign-button')} invert onClick={onLogout}><FormattedMessage id="sidebar.logout"/></Button>
        ]
        : [
          <div className={cx('message')} key={0}>
           <FormattedMessage id="sidebar.try"/>
          </div>,
          <Button className={cx('sign-button')} invert onClick={onLoginClick} key={1}>
            <FormattedMessage id="sidebar.change"/>
          </Button>
        ]
      }
    </div>
    <div className={cx('menu')}>
      <MenuItem to="/trade" onClick={onClose}><FormattedMessage id="sidebar.exchange"/></MenuItem>
      { user && <MenuItem to="/wallet" onClick={onClose}><FormattedMessage id="sidebar.payment"/></MenuItem>}
          <MenuItem to="/ranking" onClick={onClose}><FormattedMessage id="sidebar.ranking"/></MenuItem>
      <MenuItem to="/info" onClick={onClose}><FormattedMessage id="sidebar.info"/></MenuItem>
         <div className={cx('sidebar-img')}>
	<a href="https://coinmarket.or.kr"><img className={cx('sidebar-img')} src={america} alt="en" /></a>
	<a href="https://ko.coinmarket.or.kr"><img className={cx('sidebar-img')} src={korea} alt="ko" /></a>
         </div>
    </div>
  </SidebarWrapper>
);

export default Sidebar;