import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassView.scss';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ForgotPassView = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // if(email === '') return;
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("send oke");
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
    // Perform login logic
  };

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div className="login-background">
      <form onSubmit={handleResetPassword} className="login-form">
        <h1>Lấy lại mật khẩu</h1>
        <div className="bar"></div>
        <label>
          <input type="tel" value={email} placeholder="Email" onChange={handleEmailChange} />
        </label>
        {/* <label className="password">
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Mã OTP"
              onChange={handlePasswordChange}
              className="password-input"
            />

            <div className="password-icon" onClick={toggleShowPassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
        </label> */}

        <button type="submit">Xác nhận</button>

      </form>
    </div>
  );
};

export default ForgotPassView;
