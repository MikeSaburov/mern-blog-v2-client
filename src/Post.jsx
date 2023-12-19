import React from 'react';
import { format } from 'date-fns';

import { ru } from 'date-fns/locale';
export const Post = ({ title, summary, cover, content, createdAt }) => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/11/oneplus-open.jpg"
          alt=""
        />
      </div>

      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="autor">Mike Saburov</a>
          <time>
            {format(new Date(createdAt), 'd MMM YYY в HH:mm', { locale: ru })}
          </time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
