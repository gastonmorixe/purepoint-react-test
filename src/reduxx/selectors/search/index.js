import { createSelector } from "reselect"

const _base = state => state.search

export const getSearchIsLoading = createSelector(
  _base,
  state => !!state.loading
)
export const getSearchError = createSelector(_base, state => state.error)
export const getSearchData = createSelector(_base, state => state.data)
