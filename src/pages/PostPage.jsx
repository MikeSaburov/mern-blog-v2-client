import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { UserContext } from '../UserContext';

export const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
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

      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit" to={'/edit'}>
            Редактировать статью
          </Link>
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};
