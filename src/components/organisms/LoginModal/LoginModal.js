import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input, Button, TextButton, SocialLoginButton, InputError } from 'components';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible, 
  mode, 
  forms,
  error,
  onChangeInput,
  onChangeMode,
  onLogin,
  onRegister,
  onSocialLogin,
  onClose,
  onKeyPress
}) => {
  const isLogin = mode === 'login';
  const modeText = isLogin ? <FormattedMessage id="login.modal.login"/> : <FormattedMessage id="login.modal.register"/>;
  const invertedText = isLogin ? <FormattedMessage id="login.modal.register"/> : <FormattedMessage id="login.modal.login"/>;
  
  const {
    email,
    password,
  } = forms.toJS();

  const {
    email: emailError,
    password: passwordError,
    localLogin: localLoginError
  } = error ? error.toJS() : { };

  const onButtonClick = isLogin ? onLogin : onRegister;

  return (
    <Modal visible={visible} mobileFullscreen>
      <div className={cx('login-modal')}>
        <div className={cx('bar')}></div>
        <div className={cx('close')} onClick={onClose}>✕</div>
        <div className={cx('content')}>
          <h3><FormattedMessage id="login.modal.email"/> {modeText}</h3>
          <InputError error={localLoginError} noMarginTop/>
          <div className={cx('form')}>
            <Input 
              value={email}
              onChange={onChangeInput}
              name="email" 
              fullWidth big 
              placeholder="email"/>
              <InputError error={emailError}/>
            <Input 
              value={password}
              onChange={onChangeInput}
              name="password" 
              fullWidth big 
              placeholder="password" 
              type="password"
              onKeyPress={onKeyPress}/>
              <InputError error={passwordError}/>
          </div>
          <Button 
            flat color="teal" 
            flex padding="0.6rem" 
            className={cx('login')}
            onClick={onButtonClick}>{modeText}</Button>
          <div className={cx('login-foot')}>
            <TextButton><FormattedMessage id="login.modal.find"/></TextButton>
            <TextButton right onClick={onChangeMode}>{invertedText}</TextButton>
          </div>
          <div className={cx('separator')}>
            <div className={cx('or')}>OR</div>
          </div>
          <h3><FormattedMessage id="login.modal.social"/> {modeText}</h3>
          <SocialLoginButton onSocialLogin={onSocialLogin}/>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;