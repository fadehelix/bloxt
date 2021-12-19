import AddIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import { useStoreActions } from '../../hooks/store.hooks';
import blockFactory from '../Block/blockFactory';

function AddEmptyBlockButton() {
  const createBlock = useStoreActions((actions) => actions.createBlock);

  const clickHandler = () => {
    createBlock(blockFactory({ mode: 'edit', content: '' }));
  };
  return (
    <IconButton
      size="large"
      onClick={clickHandler}
      aria-label="Add new block"
      color="primary"
      title="Add new block"
    >
      <AddIcon style={{ fontSize: 50 }} />
    </IconButton>
  );
}

export default AddEmptyBlockButton;
