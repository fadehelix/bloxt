import React from 'react';
import style from './App.module.scss';
import { AppHeader, Editor, Notes } from './components';

function App() {
  return (
    <div className={style.root}>
      <AppHeader />
      <main className={style.main}>
        <Editor />
        <aside className={style.sidebar}>
          <Notes />
        </aside>
      </main>
    </div>
  );
}

export default App;
