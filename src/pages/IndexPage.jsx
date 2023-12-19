import React, { useEffect } from 'react';
import { Post } from '../Post';

export const IndexPage = () => {
  useEffect(() => {
    fetch('/post').then((res) => {
      res.json().then((posts) => {
        console.log(posts);
      });
    });
  }, []);

  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};
