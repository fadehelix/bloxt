import { useState } from 'react';
import classnames from 'classnames';
import { RichTextEditor } from '../index';
import { useStoreActions } from '../../hooks/store.hooks';
import BlockType from '../../data/block.model';
import TextComponent from './Text';

import style from './Block.module.scss';
import { notificationMessages } from '../../data/notification.model';

type BlockProps = {
  data: BlockType;
};

function Block({ data }: BlockProps) {
  const { content, mode } = data;
  const [isActive, setIsActive] = useState(false);
  const editBlock = useStoreActions((actions) => actions.editBlock);
  const deleteBlock = useStoreActions((actions) => actions.deleteBlock);
  const showNotification = useStoreActions(
    (actions) => actions.showNotification
  );

  const handleDelete = () => {
    deleteBlock(data.id);
    showNotification({
      type: 'success',
      message: notificationMessages.Deleted,
    });
  };

  const handleSaveText = (fieldId: string, value: string) => {
    editBlock({ ...data, [fieldId]: value, mode: 'read' });
  };

  return (
    <section
      className={classnames(style.root, 'Block', { 'block--active': isActive })}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <TextComponent
        fieldId="content"
        initialValue={content}
        mode={mode}
        saveHandler={handleSaveText}
        deleteHandler={handleDelete}
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
    </section>
  );
}

export default Block;
