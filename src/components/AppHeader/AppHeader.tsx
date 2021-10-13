import React from 'react';
import { AddButton } from '../index';
import style from './AppHeader.module.scss';

function AppHeader() {
  return (
    <header className={style.root}>
      <span className={style.title}>Bl</span>
      <AddButton />
      <span className={style.title}>xt</span>
    </header>
  );
}

export default AppHeader;
