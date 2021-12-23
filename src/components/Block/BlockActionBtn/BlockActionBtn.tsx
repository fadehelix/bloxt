import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

type Props = {
  title: string;
  clickHandler: Function;
};

function BlockActionBtn({ title, clickHandler }: Props) {
  return (
    <IconButton title={title} aria-label={title} onClick={() => clickHandler()}>
      <DeleteForeverIcon />
    </IconButton>
  );
}

export default BlockActionBtn;
