import { createStore, action } from 'easy-peasy';
import { v4 as uuid } from 'uuid';
import StoreModel from './data/store.model';

const initialBlocks = Array.from({ length: 3 }, (v, k) => k).map((k) => ({
  id: uuid(),
  title: `Initial block  ${k}`,
  content: 'Example initial content',
}));

const store = createStore<StoreModel>({
  blocks: initialBlocks,
  createBlock: action((state, payload) => {
    state.blocks.push(payload);
  }),
  reorderBlocks: action((state, payload) => {
    state.blocks = payload;
  }),
});

export { store };
