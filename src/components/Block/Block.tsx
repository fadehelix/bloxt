import React from 'react';

import style from './Block.module.scss';

type BlockProps = {
  title?: string;
  content: string;
};

function Block({ title, content }: BlockProps) {
  return (
    <div className={style.root}>
      {title && <p className={style.blockTitle}>{title}</p>}
      <p>{content}</p>
    </div>
  );
}

export default Block;
