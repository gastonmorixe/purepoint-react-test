import {
  SEARCH_REQUEST_LOADING,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS
} from "../../constants/search"

const initialState = {
  loading: null,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SEARCH_REQUEST_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }
    default:
      return state
  }
}
