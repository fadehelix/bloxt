import { NotificationTypes } from '../components/Notification/index';

interface INotification {
  type: NotificationTypes;
  message: notificationMessages;
}

export enum notificationMessages {
  BlockDeletedSuccess = 'Block has been succesfuly deleted',
  BlockCannotBeEmpty = 'Block content cannot be empty',
  TextCopiedToClipboardSuccess = 'Copied',
}

export default INotification;
