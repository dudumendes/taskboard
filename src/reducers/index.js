import {combineReducers} from 'redux';
import devs from './devReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  devs, form: formReducer
});

export default rootReducer;
