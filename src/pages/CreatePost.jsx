import React from 'react';
import ReactQuill from 'react-quill';

export const CreatePost = () => {
  return (
    <form className="create">
      <input type="title" placeholder={'Введите заголовок'} />
      <input type="summary" placeholder={'Краткое описание'} />
      <input type="file" />
      <ReactQuill />
    </form>
  );
};
