import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSecret(e.target.value);
  };

  const handleSignIn = () => {
    if (secret === 'ilovereact') {
      context.setSignedIn(true);
      navigate('/music-page');
    } else {
      setError(true);
      setSecret('');
    }
  };

  return (
    <div>
      {error && (
        <h3 style={{ color: 'red' }}>Wrong secret!! Try again!</h3>
      )}
      <h1>Login to Access</h1>
      <label>Enter secret text to redirect into music page!! </label>
      <input
        placeholder='Your secret'
        value={secret}
        onChange={handleChange}
      />
      <button onClick={handleSignIn}>Login</button>
    </div>
  );
};

export default LoginPage;
