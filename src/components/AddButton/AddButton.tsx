import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { useStoreActions } from '../../hooks/store.hooks';
import { v4 as uuid } from 'uuid';
import { randomSentence } from '../../utils/fakeData';
import { Button } from '../Form/index';
import style from './AddButton.module.scss';

function AddButton() {
  const createBlock = useStoreActions((actions) => actions.createBlock);
  const clickHandler = () => {
    const id = uuid();
    createBlock({
      id,
      title: `Optional description for this block`,
      content: randomSentence(),
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
