import React, { useState } from 'react';

export const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function Login(e) {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return (
    <form className="login" onSubmit={Login}>
      <h2>Войти</h2>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Войти</button>
    </form>
  );
};
