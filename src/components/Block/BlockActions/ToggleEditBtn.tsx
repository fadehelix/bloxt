import IconButton from '@mui/material/IconButton';
import { Save as SaveIcon, Edit as EditIcon } from '@mui/icons-material';

type Props = {
  editMode: boolean;
  clickHandler: Function;
};

function ToggleEditBtn({ editMode, clickHandler }: Props) {
  const title = editMode ? 'Save' : 'Edit';
  const cssClass = editMode ? 'ButtonSave' : 'ButtonEdit';
  return (
    <IconButton
      title={title}
      aria-label={title}
      onClick={() => clickHandler()}
      className={cssClass}
    >
      {editMode ? <SaveIcon /> : <EditIcon />}
    </IconButton>
  );
}

export default ToggleEditBtn;
