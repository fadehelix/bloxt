import { useState } from 'react';
import { HtmlPreview } from '../index';
import ToggleEditBtn from './ToggleEditBtn/ToggleEditBtn';
import style from './Text.module.scss';

interface Props {
  fieldId: string;
  saveHandler: (fieldId: string, value: string) => void;
  initialValue?: string;
  component?: (
    initialValue: string,
    handleValue: Function
  ) => React.ReactElement;
}

function Text({ fieldId, initialValue = '', component, saveHandler }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(initialValue);
  return (
    <>
      <div className={style.actionIcon}>
        <ToggleEditBtn
          editMode={editMode}
          clickHandler={() => {
            setEditMode(!editMode);
            saveHandler(fieldId, value);
          }}
        />
      </div>
      {editMode ? (
        component &&
        component(value, (value: string) => {
          setValue(value);
        })
      ) : (
        <HtmlPreview value={value} />
      )}
    </>
  );
}

export default Text;
