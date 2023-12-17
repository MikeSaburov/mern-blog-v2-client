import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function Login(e) {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      alert('Вы успешно зашли');
      setRedirect(true);
    } else {
      alert('Не удалось войти, проверьте логин и пароль');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
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
