import { useState } from 'react';
import classnames from 'classnames';
import { RichTextEditor } from '../index';
import { useStoreActions } from '../../hooks/store.hooks';
import BlockType from '../../data/block.model';
import TextComponent from './Text';

import style from './Block.module.scss';

type BlockProps = {
  data: BlockType;
};

function Block({ data }: BlockProps) {
  const { content } = data;
  const [isActive, setIsActive] = useState(false);
  const editBlock = useStoreActions((actions) => actions.editBlock);

  const handleSaveText = (fieldId: string, value: string) => {
    editBlock({ ...data, [fieldId]: value });
  };

  return (
    <section
      className={classnames(style.root, { 'block--active': isActive })}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* {
        <div className={style.blockTitle}>
          <TextComponent
            fieldId="title"
            initialValue={title}
            saveHandler={handleSaveText}
            component={(initialValue, handleValue) => {
              return (
                <PureTextEditor
                  initialValue={initialValue}
                  // @ts-ignore
                  handleValue={handleValue}
                />
              );
            }}
          />
        </div>
      } */}
      <div className={style.blockContent}>
        <TextComponent
          fieldId="content"
          initialValue={content}
          saveHandler={handleSaveText}
          component={(initialValue, handleValue) => {
            return (
              <RichTextEditor
                initialValue={initialValue}
                // @ts-ignore
                handleValue={handleValue}
              />
            );
          }}
        />
      </div>
    </section>
  );
}

export default Block;
