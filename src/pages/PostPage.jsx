import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

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

  if (!postInfo) return '';

  return (
    <div className="post-page">
      <time>
        {format(new Date(postInfo.createdAt), 'd MMM YYY г. в HH:mm', {
          locale: ru,
        })}
      </time>
      <h1>{postInfo.title}</h1>
      <h3>{postInfo.summary}</h3>
      <div className="author">Автор: {postInfo.author.userName}</div>
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};
