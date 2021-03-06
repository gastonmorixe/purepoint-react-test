import { put, takeLatest } from "redux-saga/effects" // throttle

import { SEARCH_FIELD_CHANGED } from "reduxx/constants/search"
import { searchQuery } from "reduxx/actions/search"

function* fetchSearch(action) {
  const queryText = action.payload
  yield put(searchQuery(queryText))
}

export default function*() {
  // TODO throttle
  yield takeLatest(SEARCH_FIELD_CHANGED, fetchSearch)
}
