import * as types from './actionTypes'
import {reset as resetForm} from 'redux-form'
import axios from 'axios'
const URL = "http://localhost:3004/devs"

export function createDev(dev) {
  dev.id = generateId(dev)
  return dispatch => {
    axios.post(URL, dev)
      .then( request => {
          dispatch(resetForm('devForm'))
          dispatch({type: types.CREATE_DEV_SUCCESS})
      })
   }
}

export function loadDevs() {
  return dispatch => {
    axios.get(URL)
      .then(devs => {
        dispatch(loadDevsSuccess(devs.data))
      })
  }
}

export function loadDevsSuccess(devs) {
  return { type: types.LOAD_DEVS_SUCCESS, devs };
}

export function manageDev(redirect) {
  return { type: types.MANAGE_DEV, redirect }
}

function generateId(dev) { 
  return dev.nome.toLowerCase() + '-' + dev.sobrenome.toLowerCase()
}