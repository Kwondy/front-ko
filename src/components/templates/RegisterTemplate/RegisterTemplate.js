import React from 'react';
import styles from './RegisterTemplate.scss';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const RegisterTemplate = ({children}) => {
  return (
    <div className={cx('register-template')}>
      <h1><FormattedMessage id="register.template.title"/></h1>
      <p><FormattedMessage id="register.template.des1"/></p> 
      <p><FormattedMessage id="register.template.des2"/></p>
      <section>
        {children}
      </section>
    </div>
  );
};

export default RegisterTemplate;