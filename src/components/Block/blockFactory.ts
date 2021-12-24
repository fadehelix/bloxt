import { v4 as uuid } from 'uuid';
import BlockType from '../../data/block.model';

type BlockFactoryParams = Omit<BlockType, 'id'>;

/**
 * Block entity
 * @param blockParams
 * @returns
 */
function blockFactory(blockParams: BlockFactoryParams): BlockType {
  return {
    id: uuid(),
    content: blockParams.content,
    mode: blockParams.mode || 'read',
    title: blockParams.title || '',
  };
}

export default blockFactory;
