import { Action } from 'easy-peasy';
import Block from './block.model';

type reorderBlocksPayload = { [key: string]: Block[] };

type StoreModel = {
  blocks: { [key: string]: Block[] };
  createBlock: Action<StoreModel, Block>;
  reorderBlocks: Action<StoreModel, reorderBlocksPayload>;
  editBlock: Action<StoreModel, Block>;
  emptyContainer: Action<StoreModel, string>;
  containers: string[];
};

export default StoreModel;
