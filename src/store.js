import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import contatosReducer from "./reducers/contatos";
import pessoasReducer from "./reducers/pessoas";
import { createLogger } from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    contatosReducer,
    pessoasReducer
  }),
  composeEnhancers(applyMiddleware(createLogger()))
);
export default store;
