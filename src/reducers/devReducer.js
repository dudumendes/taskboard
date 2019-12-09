export default function devReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_DEV':
      return [...state, Object.assign({}, action.dev)];
    case 'LOAD_DEVS_SUCCESS':
      return action.devs;
    default:
      return state;
  }
}
