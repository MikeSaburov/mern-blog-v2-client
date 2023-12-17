import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', { credentials: 'include' }).then(
      (response) => {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      }
    );
  }, []);

  function Logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.userName;

  return (
    <header>
      <Link className="logo" to="/">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="">Создать пост</Link>
            <a onClick={Logout}>Выйти</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Зарегестрироваться</Link>
          </>
        )}
      </nav>
    </header>
  );
};
