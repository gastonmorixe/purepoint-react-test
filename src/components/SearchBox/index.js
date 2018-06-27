import { connect } from "react-redux"
import { compose, withHandlers } from "recompose"
import View from "./View"

import { getSearchFieldText } from "reduxx/selectors/search"
import { searchFieldChanged } from "reduxx/actions/search"

const mapStateToProps = state => ({
  fieldText: getSearchFieldText(state)
})

const mapDispatchToProps = {
  searchFieldChanged
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onInput: ({ searchFieldChanged }) => ev => {
      const text = ev.target.value
      searchFieldChanged(text)
    },
    onSubmit: () => ev => {
      ev.preventDefault()
    },
    onClick: () => ev => {
      ev.preventDefault()
    }
  })
)(View)
