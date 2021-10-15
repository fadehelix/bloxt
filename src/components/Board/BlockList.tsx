import BlockType from '../../data/block.model';

import { DraggableBlock } from '../index';

type BlockListProps = { blocks: BlockType[] };

const BlockList: React.FC<BlockListProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index: number) => (
        <DraggableBlock block={block} index={index} key={block.id} />
      ))}
    </>
  );
};

export default BlockList;
