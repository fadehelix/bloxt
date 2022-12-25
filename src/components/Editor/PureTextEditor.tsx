import React, { useState, useEffect } from 'react';
import { EditorProps } from './types';

function PureTextEditor({ initialValue, handleValue }: EditorProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    handleValue(value);
  }, [value, handleValue]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return <input type="text" onChange={handleOnChange} value={value} />;
}

export default PureTextEditor;
