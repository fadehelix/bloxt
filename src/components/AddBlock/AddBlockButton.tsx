import React from 'react';
import { v4 as uuid } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import { useStoreActions } from '../../hooks/store.hooks';
import { Button } from '../Form/index';
import style from './AddBlockButton.module.scss';

type Props = {
  title: string;
  content: string;
};

function AddBlockButton({ title, content }: Props) {
  const createBlock = useStoreActions((actions) => actions.createBlock);
  const clickHandler = () => {
    if (!content) {
      return;
    }
    const id = uuid();
    createBlock({
      id,
      title,
      content,
    });
  };
  return (
    <Button
      text="Add text block"
      icon={<AddIcon />}
      variant="contained"
      onClick={clickHandler}
      title="Add new block"
      className={style.root}
    />
  );
}

export default AddBlockButton;
