import { createSelector } from "reselect"

const _base = state => state.search

export const getSearchIsLoading = createSelector(
  _base,
  state => !!state.loading
)
export const getSearchData = state => _base(state).data
export const getSearchFieldText = state => _base(state).fieldText
export const getSearchError = state => _base(state).error
export const getSearchIsEmpty = createSelector(
  getSearchData,
  getSearchFieldText,
  getSearchIsLoading,
  getSearchError,
  (data, fieldText, isLoading, error) => {
    return (
      !error && !isLoading && fieldText && ((data && data.length <= 0) || !data)
    )
  }
)
