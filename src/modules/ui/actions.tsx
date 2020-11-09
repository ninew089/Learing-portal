export const SCROLL_TO_REF = 'app/ui/SCROLL_TO_REF'
export const SET_SCROLL_TO_REF = 'app/ui/SET_SCROLL_TO_REF'

export function selectScroll(event: any) {
  return {
    type: SCROLL_TO_REF,
  }
}

export function setScroll(scroll: any) {
  return {
    type: SET_SCROLL_TO_REF,
    payload: {
      scroll,
    },
  }
}
