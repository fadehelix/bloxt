import { createStore, action } from 'easy-peasy';
import { v4 as uuid } from 'uuid';
import StoreModel from './data/store.model';

const initialBlocks = Array.from({ length: 3 }, (v, k) => k).map((k) => ({
  id: uuid(),
  title: `Initial block  ${k}`,
  content: `<p>Initial content ${k}</p>`,
}));

const store = createStore<StoreModel>({
  blocks: initialBlocks,
  createBlock: action((state, payload) => {
    state.blocks.push(payload);
  }),
  reorderBlocks: action((state, payload) => {
    state.blocks = payload;
  }),
  editBlock: action((state, payload) => {
    const blockId = payload.id;
    state.blocks.forEach((block) => {
      if (block.id === blockId) {
        console.log('block? ', block.id, payload.content);
        block.title = payload.title;
        block.content = payload.content;
      }
    });
  }),
});

export { store };
