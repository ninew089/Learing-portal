 import React from 'react'
 import axios from 'axios'
 const REQUEST_LOGIN = 'app/ui/REQUEST_LOGIN'
 const LOGIN_SUCCESS = 'app/ui/LOGIN_SUCCESS'
 const LOGIN_FAILURE = 'app/ui/LOGIN_FAILURE'
 const SET_DARK_MODE = 'app/ui/SET_DARK_MODE'
 const SET_FLASH_MESSAGE = 'app/ui/SET_FLASH_MESSAGE'
 const CLEAR_FLASH_MESSAGE = 'app/ui/CLEAR_FLASH_MESSAGE'

 function requestLogin(login:object) {
    return async (dispatch:any) => {
        dispatch({  type: REQUEST_LOGIN,})
    
        try {
          const { data } = await axios.post(`/login`,login)
    
          dispatch({ type: LOGIN_SUCCESS, payload: { login: data } })
          // save cookie
        } catch (err) {
          dispatch({ type: LOGIN_FAILURE })
        }
      }
}


export {
    REQUEST_LOGIN,
    SET_DARK_MODE,
    SET_FLASH_MESSAGE,
    CLEAR_FLASH_MESSAGE,LOGIN_FAILURE,LOGIN_SUCCESS,requestLogin
  
  }
  