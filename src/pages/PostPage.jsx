import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/post/${id}`).then((res) => {
      res.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  return <div>PostPage</div>;
};
