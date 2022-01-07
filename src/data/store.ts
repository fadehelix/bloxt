import { createStore, action } from 'easy-peasy';
import { v4 as uuid } from 'uuid';
import StoreModel from './store.model';
import BlockType from './block.model';
import blockFactory from '../components/Block/blockFactory';
import { defaultContainers } from '.';

const initialBlocks: BlockType[] = [
  '<h2>Bloxt is a text editor that allows you to build article from blocks</h2>',
  '<p>Just write down your ideas and <strong>sort them </strong>later by dragging up and down</p>',
].map((content) =>
  blockFactory({
    title: 'Optional description for this block',
    content: content,
  })
);

const initialContainers = [
  defaultContainers.Board,
  defaultContainers.Notes,
  defaultContainers.Trash,
];
const model: StoreModel = {
  blocks: {
    [defaultContainers.Board]: initialBlocks,
    [defaultContainers.Notes]: [],
    [defaultContainers.Trash]: [],
  },
  createBlock: action((state, payload) => {
    state.blocks[defaultContainers.Board].push(payload);
  }),
  reorderBlocks: action((state, payload) => {
    state.blocks = payload;
  }),
  editBlock: action((state, payload) => {
    const blockId = payload.id;
    state.blocks[defaultContainers.Board].forEach((block) => {
      if (block.id === blockId) {
        block.title = payload.title;
        block.content = payload.content;
      }
    });
  }),
  deleteBlock: action((state, payload) => {
    state.blocks[defaultContainers.Board] = state.blocks[
      defaultContainers.Board
    ].filter((block) => block.id !== payload);
  }),
  emptyContainer: action((state, payload) => {
    state.blocks[payload].length = 0;
  }),
  containers: initialContainers,
  notification: null,
  showNotification: action((state, payload) => {
    state.notification = payload;
  }),
  boardContent: '',
  updateBoardContent: action((state, payload) => {
    state.boardContent = payload;
  }),
};
const store = createStore<StoreModel>(model);

export { store, model };
