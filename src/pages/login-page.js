import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-page-container">
    <h1>log in</h1>
    <form className='login-page-form-container'>
      <label for="username">username:</label>
      <input type="text" id="username" name="username" />
      <label for="password">password:</label>
      <input type="text" id="password" name="password" />
    </form>
    <button className="login-page-button" id="submit">log in</button>
  </div>
  );
};

export default LoginPage;
