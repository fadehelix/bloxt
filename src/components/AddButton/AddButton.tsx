import React from 'react';
import { v4 as uuid } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import { useStoreActions } from '../../hooks/store.hooks';
import { Button } from '../Form/index';
import style from './AddButton.module.scss';

function AddButton() {
  const createBlock = useStoreActions((actions) => actions.createBlock);
  const clickHandler = () => {
    const id = uuid();
    createBlock({
      id,
      title: `New block`,
      content: 'New block',
    });
  };
  return (
    <Button
      text="Add block"
      icon={<AddIcon />}
      variant="outlined"
      onClick={clickHandler}
      className={style.root}
      title="Add new block"
    />
  );
}

export default AddButton;
