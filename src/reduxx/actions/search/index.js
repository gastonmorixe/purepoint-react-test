import { createActions } from "redux-actions"
import AppAPI from "api"

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

export const searchQuery = query => async dispatch => {
  dispatch(searchRequestLoading())
  try {
    const searchResult = await AppAPI.search(query)
    debugger
    dispatch(searchRequestSuccess(searchResult))
  } catch (error) {
    dispatch(searchRequestError(error))
  }
}
