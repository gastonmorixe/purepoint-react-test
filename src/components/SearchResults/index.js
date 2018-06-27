import { connect } from "react-redux"
import View from "./View"

import {
  getSearchIsLoading,
  getSearchData,
  getSearchError,
  getSearchIsEmpty
} from "reduxx/selectors/search"

const mapStateToProps = state => ({
  isLoading: getSearchIsLoading(state),
  data: getSearchData(state),
  error: getSearchError(state),
  isEmpty: getSearchIsEmpty(state)
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
