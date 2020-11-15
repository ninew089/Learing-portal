import { SCROLL_TO_REF, SET_SCROLL_TO_REF } from './actions'

const initialState = {
  scroll: null,
}
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SCROLL_TO_REF:
      return { ...state, scroll: null }
    case SET_SCROLL_TO_REF:
      return { ...state, scroll: action.payload.login }
    default:
      return state
  }
}
