import React from 'react';
import style from './ToggleEditBtn.module.scss';
import { ReactComponent as EditIcon } from './icons/edit-icon.svg';
import { ReactComponent as SaveIcon } from './icons/save-icon.svg';

type Props = {
  editMode: boolean;
  clickHandler: Function;
};

function ToggleEditBtn({ editMode, clickHandler }: Props) {
  return (
    <div className={style.root} onClick={() => clickHandler()}>
      {editMode ? <SaveIcon /> : <EditIcon />}
    </div>
  );
}

export default ToggleEditBtn;
