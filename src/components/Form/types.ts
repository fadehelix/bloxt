export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  icon?: React.ReactElement;
  variant: 'text' | 'outlined' | 'contained';
}
