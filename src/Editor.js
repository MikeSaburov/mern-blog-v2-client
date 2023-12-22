import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor(value, onChange) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <ReactQuill
      theme={'snow'}
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
    />
  );
}
