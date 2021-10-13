import React from 'react';
import { AddButton } from '../index';
import style from './AppHeader.module.scss';

function AppHeader() {
  return (
    <header className={style.root}>
      <AddButton />
    </header>
  );
}

export default AppHeader;
