import React from 'react';

export const RegisterPage = () => {
  return (
    <form className="register">
      <h2>Регистрация</h2>
      <input type="text" placeholder="Введите имя пользователя" />
      <input type="password" placeholder="Введите пароль" />
      <button>Зарегестрироваться</button>
    </form>
  );
};
