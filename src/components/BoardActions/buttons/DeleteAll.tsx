import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStoreActions } from '../../../hooks/store.hooks';
import { notificationMessages } from '../../../data/notification.model';
import { defaultContainers } from '../../../data';

function DeleteAll() {
  const showNotification = useStoreActions(
    (actions) => actions.showNotification
  );
  const deleteAllBlocks = useStoreActions((actions) => actions.emptyContainer);
  const clickHandler = () => {
    deleteAllBlocks(defaultContainers.Board);
    showNotification({
      message: notificationMessages.Deleted,
      type: 'success',
    });
  };
  return (
    <Button
      className="DeleteAllBtn"
      onClick={clickHandler}
      startIcon={<DeleteIcon />}
    >
      Delete all blocks
    </Button>
  );
}

export default DeleteAll;
