import React, { useState } from 'react';
import classnames from 'classnames';
import { Editor, HtmlPreview } from '../index';
import { useStoreActions } from '../../hooks/store.hooks';
import BlockType from '../../data/block.model';
import ToggleEditBtn from './ToggleEditBtn/ToggleEditBtn';

import style from './Block.module.scss';

type BlockProps = {
  data: BlockType;
};

function Block({ data }: BlockProps) {
  const { id, title, content } = data;
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [contentEditMode, setContentEditMode] = useState(false);
  const [contentValue, setContentValue] = useState(content);
  const [isActive, setIsActive] = useState(false);
  const editBlock = useStoreActions((actions) => actions.editBlock);

  return (
    //TODO: encapsulate logic for toggling Editor
    <section
      className={classnames(style.root, { [style.active]: isActive })}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {
        <div className={style.blockTitle}>
          <div className={style.actionIcon}>
            <ToggleEditBtn
              editMode={titleEditMode}
              clickHandler={() => {
                setTitleEditMode(!titleEditMode);
                editBlock({ id, title: titleValue, content: contentValue });
              }}
            />
          </div>
          {titleEditMode ? (
            <input
              type="text"
              onChange={(event) => setTitleValue(event.currentTarget.value)}
              value={titleValue}
            />
          ) : (
            titleValue
          )}
        </div>
      }
      <div className={style.blockContent}>
        <div className={style.actionIcon}>
          <ToggleEditBtn
            editMode={contentEditMode}
            clickHandler={() => {
              setContentEditMode(!contentEditMode);
              editBlock({ id, title: titleValue, content: contentValue });
            }}
          />
        </div>
        {contentEditMode ? (
          <Editor
            initialValue={contentValue}
            handleValue={(value) => {
              setContentValue(value);
            }}
          />
        ) : (
          // @ts-ignore
          <HtmlPreview value={contentValue} />
        )}
      </div>
    </section>
  );
}

export default Block;
