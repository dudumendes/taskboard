import {combineReducers} from 'redux';
import devs from './devReducer';
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
  devs,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
