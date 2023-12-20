import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { ru } from 'date-fns/locale';
export const Post = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt="" />
        </Link>
      </div>

      <div className="text">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>

        <p className="info">
          <a className="autor">{author.userName}</a>
          <time>
            {format(new Date(createdAt), 'd MMM YYY в HH:mm', { locale: ru })}
          </time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
