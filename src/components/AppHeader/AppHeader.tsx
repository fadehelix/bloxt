import style from './AppHeader.module.scss';

function AppHeader() {
  return (
    <header className={style.root}>
      <span className={style.title}>Bloxt</span>
      <span className={style.slogan}>Write first - arrange later</span>
    </header>
  );
}

export default AppHeader;
