import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/profile', { credentials: 'include' }).then(
      (response) => {
        response.json().then((userInfo) => {
          setUserName(userInfo.userName);
        });
      }
    );
  }, []);

  return (
    <header>
      <Link className="logo" to="/">
        MyBlog
      </Link>
      <nav>
        {userName && (
          <>
            <Link to="">Создать пост</Link>
          </>
        )}
        {!userName && (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Зарегестрироваться</Link>
          </>
        )}
      </nav>
    </header>
  );
};
