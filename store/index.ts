import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from '../../reducers';

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);
