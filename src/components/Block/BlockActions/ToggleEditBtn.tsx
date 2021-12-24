import IconButton from '@mui/material/IconButton';
import { Save as SaveIcon, Edit as EditIcon } from '@mui/icons-material';

type Props = {
  editMode: boolean;
  clickHandler: Function;
};

function ToggleEditBtn({ editMode, clickHandler }: Props) {
  const title = editMode ? 'Save' : 'Edit';
  return (
    <IconButton title={title} aria-label={title} onClick={() => clickHandler()}>
      {editMode ? <SaveIcon /> : <EditIcon />}
    </IconButton>
  );
}

export default ToggleEditBtn;
