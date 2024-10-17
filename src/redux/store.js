import {combineReducers, configureStore} from '@reduxjs/toolkit';
import BooksReducer from './Slices/BooksSlice';
import ChapterReducer from './Slices/chapterSlice';
import ClassReducer from './Slices/ClassSlice';
import CategoryReducer from './Slices/categorySlice';
import ThemeReducer from './Slices/ThemeSlice';
import LanguageReducer from './Slices/languageSlice';
import YearReducer from './Slices/YearSlice';
import BoardReducer from './Slices/BoardSlice';

import storage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  books: BooksReducer,
  chapter: ChapterReducer,
  class: ClassReducer,
  category: CategoryReducer,
  theme: ThemeReducer,
  lang: LanguageReducer,
  year: YearReducer,
  board: BoardReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'lang'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({serializableCheck: true}),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
