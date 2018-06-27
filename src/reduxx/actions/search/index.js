import { createActions } from "redux-actions"

import {
  SEARCH_REQUEST_LOADING,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS
} from "../../constants/search"

export const {
  searchRequestLoading,
  searchRequestError,
  searchRequestSuccess
} = createActions({
  [SEARCH_REQUEST_LOADING]: () => {},
  [SEARCH_REQUEST_ERROR]: error => error,
  [SEARCH_REQUEST_SUCCESS]: data => data
})
