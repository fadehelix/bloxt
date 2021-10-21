import { Save as SaveIcon, Edit as EditIcon } from '@mui/icons-material';
import style from './ToggleEditBtn.module.scss';

type Props = {
  editMode: boolean;
  clickHandler: Function;
};

function ToggleEditBtn({ editMode, clickHandler }: Props) {
  return (
    <div className={style.root} onClick={() => clickHandler()}>
      {editMode ? <SaveIcon /> : <EditIcon />}
    </div>
  );
}

export default ToggleEditBtn;
