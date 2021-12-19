type BlockModes = 'read' | 'edit';
type BlockType = {
  id: string;
  title?: string;
  content: string;
  mode?: BlockModes;
};

export default BlockType;
