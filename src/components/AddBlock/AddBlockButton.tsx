import AddIcon from '@mui/icons-material/Add';
import { useStoreActions } from '../../hooks/store.hooks';
import { Button } from '../Form/index';
import { isBlockContentEmpty } from '../../utils/validation';
import blockFactory from '../Block/blockFactory';
import style from './AddBlockButton.module.scss';
import { notificationMessages } from '../../data/notification.model';

type Props = {
  title: string;
  content: string;
  clearInputs: () => void;
};

function AddBlockButton({ title, content, clearInputs }: Props) {
  const createBlock = useStoreActions((actions) => actions.createBlock);
  const showNotification = useStoreActions(
    (actions) => actions.showNotification
  );
  const clickHandler = () => {
    if (isBlockContentEmpty(content)) {
      showNotification({
        type: 'error',
        message: notificationMessages.BlockCannotBeEmpty,
      });
      return;
    }
    createBlock(blockFactory({ content, title }));
    clearInputs();
  };
  return (
    <Button
      text="Add text block"
      icon={<AddIcon />}
      variant="contained"
      onClick={clickHandler}
      title="Add new block"
      className={style.root}
    />
  );
}

export default AddBlockButton;
