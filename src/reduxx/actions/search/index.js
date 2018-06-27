import { createActions } from "redux-actions"
import AppAPI from "api"

import {
  SEARCH_FIELD_CHANGED,
  SEARCH_REQUEST_LOADING,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS
} from "../../constants/search"

export const {
  searchFieldChanged,
  searchRequestLoading,
  searchRequestError,
  searchRequestSuccess
} = createActions({
  [SEARCH_FIELD_CHANGED]: text => text,
  [SEARCH_REQUEST_LOADING]: () => {},
  [SEARCH_REQUEST_ERROR]: error => error,
  [SEARCH_REQUEST_SUCCESS]: data => data
})

export const searchQuery = query => async dispatch => {
  dispatch(searchRequestLoading())
  try {
    // Todo Loop until load 20 results
    const searchResult = await AppAPI.search(query)
    const json = await searchResult.json()
    dispatch(searchRequestSuccess(json["results"]))
  } catch (error) {
    dispatch(searchRequestError(error))
  }
}
