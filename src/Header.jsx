import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  useEffect(() => {
    fetch('http://localhost:4000/profile', { credentials: 'include' });
  }, []);

  return (
    <header>
      <Link className="logo" to="/">
        MyBlog
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};
