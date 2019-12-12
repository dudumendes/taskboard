import * as types from './actionTypes'
import {reset as resetForm, initialize} from 'redux-form'
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const URL = "http://localhost:3004/devs"

export function createDev(dev) {
  let method = "put"
  let id = dev.id

  if (!dev.id) {
    dev.id = generateId(dev)
    method = "post"
    id = ""
  }
  
  return dispatch => {
    axios[method](`${URL}/${id}`, dev)
      .then( request => {
          toastr.success('Operacao realizada com sucesso')
          dispatch(resetForm('devForm'))
          dispatch({type: types.CREATE_DEV_SUCCESS})
      })
   }
}

export function loadDev(dev) {
  return dispatch => {
    dispatch(manageDev(false))
    dispatch(initialize('devForm', dev))
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