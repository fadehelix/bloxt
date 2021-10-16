import { useState, useEffect } from 'react';
import { EditorProps } from './types';

function PureTextEditor<T>({ initialValue, handleValue }: EditorProps<T>) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    handleValue(value);
  }, [value, handleValue]);

  const handleOnChange = (event: any) => {
    setValue(event.currentTarget.value);
  };
  // @ts-ignore
  return <input type="text" onChange={handleOnChange} value={value} />;
}

export default PureTextEditor;
