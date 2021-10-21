import React from 'react';
import style from './AppHeader.module.scss';

function AppHeader() {
  return (
    <header className={style.root}>
      <span className={style.title}>Bloxt</span>
    </header>
  );
}

export default AppHeader;
