import { createStore, compose } from "redux";
import rootReducer from "./redux/reducers";

import { initialState } from "./redux/reducers";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(rootReducer, initialState, enhancers);
