import React, { useState, useRef, useEffect } from 'react';
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorProps<T> {
  initialValue: T;
  handleValue: (value: T) => void;
}

function Editor<T>({ initialValue, handleValue }: EditorProps<T>) {
  const [value, setValue] = useState(initialValue);
  const quill = useRef(null);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
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
    'indent',
    'link',
    'image',
  ];

  // TODO: TEST for setting focus
  // TODO: get rid of TS error
  useEffect(() => {
    //@ts-ignore
    quill.current.focus();
  });

  useEffect(() => {
    handleValue(value);
  }, [value]);

  const handleOnChange = (value: any) => {
    setValue(value);
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleOnChange}
      modules={modules}
      formats={formats}
      ref={quill}
    />
  );
}

export default Editor;
