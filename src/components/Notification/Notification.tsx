import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useStoreState } from '../../hooks/store.hooks';

const NotificationComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const notification = useStoreState((state) => state.notification);

  useEffect(() => {
    if (!notification) return;
    const { type, message } = notification;
    enqueueSnackbar(message, {
      variant: type,
      autoHideDuration: 5000,
    });
  }, [notification, enqueueSnackbar]);
  return <></>;
};

export default NotificationComponent;
