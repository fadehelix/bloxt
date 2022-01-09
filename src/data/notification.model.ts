import { NotificationTypes } from '../components/Notification/index';

interface INotification {
  type: NotificationTypes;
  message: notificationMessages;
}

export enum notificationMessages {
  Deleted = 'Deleted',
  BlockCannotBeEmpty = 'Block content cannot be empty',
  TextCopiedToClipboardSuccess = 'Copied',
}

export default INotification;
