import { createStore, action } from 'easy-peasy';
import { v4 as uuid } from 'uuid';
import StoreModel from './store.model';
import BlockType from './block.model';
import blockFactory from '../components/Block/blockFactory';
import { defaultContainers } from '.';

const initialBlocks: BlockType[] = [
  '<h2>Bloxt is a text editor to build an article from blocks</h2>',
  'You can write down your ideas and <strong>sort them </strong>later',
  'If there is something you can keep for later use then put the block in <i>Notes</i> area',
].map((content) =>
  blockFactory({
    title: 'Optional description for this block',
    content: content,
  })
);

const initialContainers = [
  defaultContainers.board,
  defaultContainers.notes,
  defaultContainers.trash,
];
const model: StoreModel = {
  blocks: {
    [defaultContainers.board]: initialBlocks,
    [defaultContainers.notes]: [],
    [defaultContainers.trash]: [],
  },
  createBlock: action((state, payload) => {
    state.blocks[defaultContainers.board].push(payload);
  }),
  reorderBlocks: action((state, payload) => {
    state.blocks = payload;
  }),
  editBlock: action((state, payload) => {
    const blockId = payload.id;
    state.blocks[defaultContainers.board].forEach((block) => {
      if (block.id === blockId) {
        block.title = payload.title;
        block.content = payload.content;
      }
    });
  }),
  emptyContainer: action((state, payload) => {
    state.blocks[payload].length = 0;
  }),
  containers: initialContainers,
  notification: null,
  showNotification: action((state, payload) => {
    state.notification = payload;
  }),
};
const store = createStore<StoreModel>(model);

export { store, model };
