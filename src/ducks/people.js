import {appName} from '../config'
import {Record, OrderedMap} from 'immutable'
import {put, call, takeEvery, all, select, fork, spawn, cancel, cancelled, race, take} from 'redux-saga/effects'
import {delay, eventChannel} from 'redux-saga'
// import {fbDatatoEntities} from './utils'
import {reset} from 'redux-form'
import firebase from 'firebase'
// import {createSelector} from 'reselect'

const ReducerState = Record({
  entities: new OrderedMap({}),
  loading: false
})

const PersonRecord = Record({
  uid: null,
  firstName: null,
  lastName: null,
  email: null,
  events: []
})

export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`
export const FETCH_ALL_ERROR = `${prefix}/FETCH_ALL_ERROR`
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`
export const ADD_PERSON_ERROR = `${prefix}/ADD_PERSON_ERROR`
export const ADD_EVENT_REQUEST = `${prefix}/ADD_EVENT_REQUEST`

export default function reducer(state = new ReducerState(), action){
  const {type, payload} = action
  switch (type){
    case ADD_PERSON_SUCCESS:
      return state.update('entities', entities =>
        entities.push(new PersonRecord(payload.person)))
    default:
      return state
  }
}

export function addPerson(person) {
  return (dispatch) => {
    dispatch({
      type: ADD_PERSON_SUCCESS,
      payload: {
        person: {id: Date.now(), ...person}
      }
    })
  }
}