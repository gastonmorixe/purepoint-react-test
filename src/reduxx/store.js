import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"

import reducers from "./reducers"
import sagas from "./saga"

const sagaMiddleware = createSagaMiddleware()

const middleware = [logger, thunk, sagaMiddleware]

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(sagas)

export default store
