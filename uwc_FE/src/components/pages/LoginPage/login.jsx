import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="tcn">
      <form className="login-form">
        <h1>Màn hình chính đăng nhập</h1>
        <div className='bar'></div>
        <label>
          <input
            type="tel"
            value={phoneNumber}
            placeholder='Số điện thoại'
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            placeholder='Mật khẩu'
            onChange={handlePasswordChange}
          />
        </label>
        <Link to="/Taskassign">
        <button type="submit" >Đăng nhập</button>
      </Link>
        <div className='forgotPass'>
          <label class="remember-me">
            <input type="checkbox"/>
            <span class="checkmark"></span>
            <span class="text">Remember Me</span>
          </label>
          <Link to="/forgot">Quên mật khẩu</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
