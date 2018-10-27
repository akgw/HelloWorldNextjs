import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

export interface RootState {
  [key: string]: any;
  // あとでstore追加したら変更する
}

type State = {};

const RootReducer = combineReducers<State>({});

export default (initialState: RootState) => {
  return createStore(RootReducer, initialState, devToolsEnhancer({}));
};
