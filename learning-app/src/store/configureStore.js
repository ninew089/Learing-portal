import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import rootReducer from 'modules/reducers'

function configureStore(initialState) {
  const middleware = [reduxThunk]

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  )

  return store
}

export default configureStore
