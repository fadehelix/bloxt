import { Action } from 'easy-peasy';
import Block from './block.model';

type StoreModel = {
  blocks: Block[];
  createBlock: Action<StoreModel, Block>;
  reorderBlocks: Action<StoreModel, Block[]>;
  editBlock: Action<StoreModel, Block>;
};

export default StoreModel;
