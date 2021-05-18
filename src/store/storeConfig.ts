import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
}

const store = createStore(
  combineReducers({
    rootReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
