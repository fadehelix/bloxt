import { Action } from 'easy-peasy';
import Block from './block.model';
import INotification from './notification.model';

type reorderBlocksPayload = { [key: string]: Block[] };

type StoreModel = {
  blocks: { [key: string]: Block[] };
  createBlock: Action<StoreModel, Block>;
  reorderBlocks: Action<StoreModel, reorderBlocksPayload>;
  editBlock: Action<StoreModel, Block>;
  emptyContainer: Action<StoreModel, string>;
  containers: string[];
  notification: INotification | null;
  showNotification: Action<StoreModel, INotification>;
};

export default StoreModel;
