import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CreatePost = () => {
  return (
    <form className="create">
      <input type="title" placeholder={'Введите заголовок'} />
      <input type="summary" placeholder={'Краткое описание'} />
      <input type="file" />
      <ReactQuill theme="snow" />
    </form>
  );
};
