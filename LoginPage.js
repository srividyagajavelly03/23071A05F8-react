import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3) {
      setMessage('Username must be at least 3 characters long.');
      return;
    }
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }
    setMessage(`Logged in successfully as ${username}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: '#282c34',
            color: 'white',
            border: 'none',
          }}
        >
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
