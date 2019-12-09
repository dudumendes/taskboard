import {combineReducers} from 'redux';
import devs from './devReducer';

const rootReducer = combineReducers({
  devs
});

export default rootReducer;
