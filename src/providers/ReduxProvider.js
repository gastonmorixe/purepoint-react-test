import React from "react"
import { Provider } from "react-redux"

import store from "reduxx/store"

export default props => <Provider store={store} {...props} />
