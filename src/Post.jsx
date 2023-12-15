import React from 'react';

export const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/11/oneplus-open.jpg"
          alt=""
        />
      </div>

      <div className="text">
        <h2>A comprehensive list of 2023 tech layoffs</h2>
        <p className="info">
          <a className="autor">Mike Saburov</a>
          <time>15.12.2023 22:13</time>
        </p>
        <p className="summary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eaque
          tempore, blanditiis totam provident sequi quod hic illo neque odio?
          Amet et voluptatibus quae ratione perspiciatis quia facilis dolores
          repudiandae?
        </p>
      </div>
    </div>
  );
};
