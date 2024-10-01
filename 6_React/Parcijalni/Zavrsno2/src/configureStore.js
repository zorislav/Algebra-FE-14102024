import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './redux';

const persistConfig = {
  key: 'parcijalni-ispit',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return { store, persistor };
};
