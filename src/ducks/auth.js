import {appname} from "../config"
import * as firebase from "firebase";
import {Record} from 'immutable'
import store from '../redux'
import {all, cps, call, put, take, takeEvery} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {push} from 'react-router-redux'

const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false
})

export const moduleName = "auth"

export const SIGN_UP_REQUEST = `${appname}/${moduleName}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${appname}/${moduleName}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${appname}/${moduleName}/SIGN_UP_ERROR`
export const SIGN_IN_REQUEST = `${appname}/${moduleName}/SIGN_IN_REQUEST`
export const SIGN_IN_ERROR = `${appname}/${moduleName}/SIGN_IN_ERROR`
export const SIGN_IN_SUCCESS = `${appname}/${moduleName}/SIGN_IN_SUCCESS`
export const SIGN_OUT_REQUEST = `${appname}/${moduleName}/SIGN_OUT_REQUEST`
export const SIGN_OUT_SUCCESS = `${appname}/${moduleName}/SIGN_OUT_SUCCESS`

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload, error} = action

  switch (type) {
    case SIGN_UP_REQUEST:
    case SIGN_IN_REQUEST:
      return state.set('loading', true)

    case SIGN_IN_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload.user)
        .set('error', null)

    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
      return state
        .set('loading', false)
        .set('error', error)

    case SIGN_OUT_SUCCESS:
      return new ReducerRecord()

    default:
      return state
  }
}


export function signUp(email, password) {
  return (dispatch) => {
    dispatch({type: SIGN_UP_REQUEST})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {user}
      }))
      .catch(error => dispatch({
        type: SIGN_UP_ERROR,
        error
      }))
  }
}

export function signIn(email, password) {
  return (dispatch) => {
    dispatch({type: SIGN_UP_REQUEST})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {user}
      }))
      .catch(error => dispatch({
        type: SIGN_UP_ERROR,
        error
      }))
  }
}

firebase.auth().onAuthStateChanged(user => {
  store.dispatch({
    type: SIGN_IN_SUCCESS,
    payload: user
  })
})