import { useState } from 'react';
import classnames from 'classnames';
import TextEditor from '../Editor/RichTextEditor';
import AddBlockButton from './AddBlockButton';

function AddBlockInput() {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={classnames('AddBlockInput', {
          'AddBlockInput--active': active,
        })}
        onFocus={() => setActive(true)}
      >
        <TextEditor
          initialValue={value}
          handleValue={(editorValue) => {
            setValue(editorValue);
          }}
        />
        <AddBlockButton
          content={value}
          title=""
          clearInputs={() => {
            setValue('');
            setActive(false);
          }}
        />
      </div>
    </>
  );
}

export default AddBlockInput;
