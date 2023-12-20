import React from 'react';
import { format } from 'date-fns';

import { ru } from 'date-fns/locale';
export const Post = ({ title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="post">
      <div className="image">
        <img src={`http://localhost:4000/${cover}`} alt="" />
      </div>

      <div className="text">
        <h2>{title}</h2>
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
