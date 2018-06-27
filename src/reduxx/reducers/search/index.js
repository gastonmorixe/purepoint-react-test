import {
  SEARCH_REQUEST_LOADING,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_FIELD_CHANGED
} from "../../constants/search"

const initialState = {
  fieldText: "",
  loading: null,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FIELD_CHANGED:
      return {
        ...state,
        data:
          !action.payload || (action.payload && action.payload.length <= 0)
            ? null
            : state.data,
        fieldText: action.payload
      }
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SEARCH_REQUEST_LOADING:
      return {
        ...state,
        loading: state.fieldText ? true : null,
        error: null
      }
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        data: !state.fieldText
          ? null
          : action.payload.map(r => {
              return {
                title: r["title"],
                ingredients: r["ingredients"].split(", "),
                thumbnailUrl: r["thumbnail"],
                href: r["href"]
              }
            }),
        loading: false,
        error: null
      }
    default:
      return state
  }
}
