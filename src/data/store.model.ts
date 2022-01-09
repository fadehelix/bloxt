import { Action } from 'easy-peasy';
import Block from './block.model';
import INotification from './notification.model';
import { defaultContainers } from './index';

type reorderBlocksPayload = { [key: string]: Block[] };

type StoreModel = {
  blocks: { [key: string]: Block[] };
  createBlock: Action<StoreModel, Block>;
  reorderBlocks: Action<StoreModel, reorderBlocksPayload>;
  editBlock: Action<StoreModel, Block>;
  deleteBlock: Action<StoreModel, Block['id']>;
  emptyContainer: Action<StoreModel, defaultContainers>;
  containers: string[];
  notification: INotification | null;
  showNotification: Action<StoreModel, INotification>;
  boardContent: string;
  updateBoardContent: Action<StoreModel, string>;
};

export default StoreModel;
