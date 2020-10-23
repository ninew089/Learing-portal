import React from 'react'
import {
    REQUEST_LOGIN,
LOGIN_FAILURE,LOGIN_SUCCESS
  } from './actions'
  
  const initialState = {
    isLoading: false,
    items: [],
  }
  
  export default function (state = initialState, action:any) {
    switch (action.type) {
      case REQUEST_LOGIN:
        return { ...state, isLoading: true, items: [] }
     case LOGIN_FAILURE:
                return { ...state, isLoading: false }
      case LOGIN_SUCCESS:
                    return { ...state, isLoading: false, items: [action.payload.login] }
      default:
        return state
    }
  }
  