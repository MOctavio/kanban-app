import configureStore from './noteStore';
import storage from '../libs/storage';

const APP_STORAGE = 'kanban_app';
const store = configureStore(storage.get(APP_STORAGE) || {});

store.subscribe(() => {
  if(!storage.get('debug')) {
    storage.set(APP_STORAGE, store.getState());
  }
});

export default store;
