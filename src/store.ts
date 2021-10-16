import { createStore, action } from 'easy-peasy';
import { v4 as uuid } from 'uuid';
import StoreModel from './data/store.model';
import { defaultContainers } from './data';
import { randomSentence } from './utils/fakeData';

const initialBlocks = Array.from({ length: 3 }, (v, k) => k).map((k) => ({
  id: uuid(),
  title: 'Optional description for this block',
  content: `<p>${randomSentence()} ${k}</p>`,
}));

const initialContainers = [
  defaultContainers.board,
  defaultContainers.notes,
  defaultContainers.trash,
];

const store = createStore<StoreModel>({
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
});

export { store };
