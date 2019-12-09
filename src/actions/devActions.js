import axios from 'axios'
const URL = "http://localhost:3004/devs"
export function createDev(dev) {
  return { type: 'CREATE_DEV', dev };
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
  return { type: 'LOAD_DEVS_SUCCESS', devs };
}
