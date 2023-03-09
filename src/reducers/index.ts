import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';

export const reducers = combineReducers({
  example: exampleReducer,
  // Adicione outros reducers aqui
});
