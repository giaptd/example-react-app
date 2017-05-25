import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
  appName: 'concon',
  articles: null
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
    default:
      return state;
  }
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, composeWithDevTools(middleware));

export default store;