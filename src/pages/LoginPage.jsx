import React from 'react';

export const LoginPage = () => {
  return (
    <form className="login">
      <h2>Войти</h2>
      <input type="text" placeholder="Введите имя пользователя" />
      <input type="password" placeholder="Введите пароль" />
      <button>Войти</button>
    </form>
  );
};
