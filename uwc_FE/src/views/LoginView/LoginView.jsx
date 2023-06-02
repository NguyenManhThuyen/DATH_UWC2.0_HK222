import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginView.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebase';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/calendar");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-background">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Đăng nhập</h1>
        <div className="bar"></div>
        <label>
          <input type="tel" value={email} placeholder="Email" onChange={handleEmailChange} />
        </label>
        <label className="password">
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Mật khẩu"
              onChange={handlePasswordChange}
              className="password-input"
            />

            <div className="password-icon" onClick={toggleShowPassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
        </label>

        <Link to="/calendar">
          <button type="submit" onClick={handleLogin}>
            Đăng nhập
          </button>
        </Link>
        <div className="forgotPass">
          <label className="remember-me">
            <input type="checkbox" />
            <span className="text">Ghi nhớ mật khẩu</span>
          </label>
          <Link to="/forgot">Quên mật khẩu</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
