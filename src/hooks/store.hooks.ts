import { createTypedHooks } from 'easy-peasy';
import StoreModel from '../data/store.model';

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>();

// const hooks = ;

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
