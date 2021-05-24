import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "modules/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();
function configureStore(initialState) {
  const middleware = [reduxThunk, routerMiddleware(history)];

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}

export default configureStore;
