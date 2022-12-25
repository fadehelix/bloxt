import React, { useState, useRef, useEffect } from 'react';
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorProps } from './types';

import './RichTextEditor.module.scss';

function RichTextEditor({ initialValue, handleValue }: EditorProps) {
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
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
  ];

  // TODO: TEST for setting focus
  // TODO: get rid of TS error
  useEffect(() => {
    //@ts-ignore
    quill.current.focus();
  });

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleOnChange = (value: any) => {
    setValue(value);
    handleValue(value);
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

export default RichTextEditor;
