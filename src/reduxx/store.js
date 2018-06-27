import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import thunk from "redux-thunk"

import reducers from "./reducers"

const middleware = [logger, thunk]

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
