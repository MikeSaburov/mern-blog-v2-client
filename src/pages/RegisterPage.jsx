import React, { useState } from 'react';

export const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function Register(e) {
    e.preventDefault();
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return (
    <form className="register" onSubmit={Register}>
      <h2>Регистрация</h2>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Введите имя пользователя"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Введите пароль"
      />
      <button>Зарегестрироваться</button>
    </form>
  );
};
