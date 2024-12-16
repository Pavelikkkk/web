import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      onLogin({ username });
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="login-page">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;