export interface EditorProps<T> {
  initialValue: T;
  handleValue: (value: T) => void;
}
