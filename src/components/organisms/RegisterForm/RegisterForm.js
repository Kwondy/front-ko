import React from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
  SectionWithTitle,
  Input,
  SelectCurrency,
  Button,
  AlignRight,
  InitialMoneyOptions
} from 'components';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const RegisterForm = ({
  nickname,
  currency,
  optionIndex,
  displayNameExists,
  error,
  onChangeNickname,
  onSetCurrency,
  onSelectOptionIndex,
  onSubmit,
  onNicknameBlur
}) => {
  return (
    <div className={cx('register-form')}>
	
      <h3><FormattedMessage id="register.form.nickname"/></h3>    {
          displayNameExists && <div className={cx('error')}><FormattedMessage id="register.form.exists"/></div> 
        }
        <Input maxLength={15} value={nickname} onChange={onChangeNickname} onBlur={onNicknameBlur}/>
      
      <h3><FormattedMessage id="register.form.initial"/></h3> 
        <div className={cx('description')}>
          <FormattedMessage id="register.form.set"/> {"\r\n"}
        </div>
        <h4>
          <FormattedMessage id="register.form.choice"/>
        </h4>
        <SelectCurrency currency={currency} onSetCurrency={onSetCurrency}/>
        <h4><FormattedMessage id="register.form.select"/></h4>
        <InitialMoneyOptions currency={currency} optionIndex={optionIndex} onSelect={onSelectOptionIndex}/>
      {
          error && (
            <AlignRight><div className={cx('error')}>{ error }</div></AlignRight>
          )
      }
      <AlignRight>
        <Link className={cx('terms')} to="/terms"><FormattedMessage id="register.form.policy"/></Link>
      </AlignRight>
      <AlignRight>
        <Button disabled={displayNameExists} flat color="teal" className={cx('register-button')} xPadding="2rem" onClick={onSubmit}>
	<FormattedMessage id="register.form.button"/>
	</Button>
      </AlignRight>
    </div>
  );
};

export default RegisterForm;