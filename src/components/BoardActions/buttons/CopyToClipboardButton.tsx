import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useStoreActions } from '../../../hooks/store.hooks';
import { notificationMessages } from '../../../data/notification.model';
import getBoardContent, { asMarkdown } from '../../../utils/getBoardContent';

type Props = {
  text: string;
};

function CopyToClipboardButton({ text }: Props) {
  const showNotification = useStoreActions(
    (actions) => actions.showNotification
  );

  const clickHandler = (e: React.MouseEvent) => {
    const boardContent = getBoardContent(asMarkdown);

    navigator.clipboard.writeText(boardContent).then(() => {
      showNotification({
        type: 'success',
        message: notificationMessages.TextCopiedToClipboardSuccess,
      });
    });
  };

  return (
    <Button
      className="CopyToClipboardButton"
      onClick={clickHandler}
      startIcon={<ContentCopyIcon />}
    >
      Copy as Markdown
    </Button>
  );
}

export default CopyToClipboardButton;
