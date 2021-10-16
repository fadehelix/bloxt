import React from 'react';
import { useStoreActions } from '../../hooks/store.hooks';
import { v4 as uuid } from 'uuid';
import { randomSentence } from '../../utils/fakeData';
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
    <button
      type="button"
      onClick={clickHandler}
      className={style.root}
      title="Add new block"
    >
      +
    </button>
  );
}

export default AddButton;
