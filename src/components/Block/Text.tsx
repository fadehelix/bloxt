import { useState } from 'react';
import { useStoreActions } from '../../hooks/store.hooks';
import { HtmlPreview } from '../index';
import ToggleEditBtn from './BlockActionBtn/ToggleEditBtn';
import BlockActionBtn from './BlockActionBtn/BlockActionBtn';
import { isBlockContentEmpty } from '../../utils/validation';
import style from './Text.module.scss';

interface Props {
  fieldId: string;
  saveHandler: (fieldId: string, value: string) => void;
  deleteHandler: () => void;
  mode?: string;
  initialValue?: string;
  component?: (
    initialValue: string,
    handleValue: Function
  ) => React.ReactElement;
}

function Text({
  fieldId,
  mode,
  initialValue = '',
  component,
  saveHandler,
  deleteHandler,
}: Props) {
  const [editMode, setEditMode] = useState(mode === 'edit');
  const [value, setValue] = useState(initialValue);
  const showNotification = useStoreActions(
    (actions) => actions.showNotification
  );

  const handleClickEdit = () => {
    if (isBlockContentEmpty(value)) {
      showNotification({
        type: 'warning',
        message: 'Block content cannot be empty',
      });
      return;
    }
    setEditMode(!editMode);
    saveHandler(fieldId, value);
  };

  const handleDelete = () => {
    deleteHandler();
  };

  return (
    <div onDoubleClick={() => setEditMode(true)}>
      <div className={style.actionIcon}>
        <BlockActionBtn title="Delete block" clickHandler={handleDelete} />
        <ToggleEditBtn editMode={editMode} clickHandler={handleClickEdit} />
      </div>
      {editMode ? (
        component &&
        component(value, (value: string) => {
          setValue(value);
        })
      ) : (
        <HtmlPreview value={value} />
      )}
    </div>
  );
}

export default Text;
