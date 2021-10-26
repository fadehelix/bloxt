import { useState } from 'react';
import TextEditor from '../Editor/RichTextEditor';
import AddBlockButton from './AddBlockButton';

function AddBlockInput() {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="AddBlockInput">
        <TextEditor
          initialValue={value}
          handleValue={(editorValue) => {
            setValue(editorValue);
          }}
        />
        <AddBlockButton
          content={value}
          title=""
          clearInputs={() => setValue('')}
        />
      </div>
    </>
  );
}

export default AddBlockInput;
