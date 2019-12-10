import * as types from '../actions/actionTypes'

const INITIAL_STATE = {
  list: [],
  redirect: false
}

export default function devReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_DEV_SUCCESS:
      return { ...state, redirect: true }
    case types.LOAD_DEVS_SUCCESS:
      return { ...state, list: action.devs }
    case types.MANAGE_DEV:
      return { ...state, redirect: action.redirect }

    default:
      return state;
  }
}
