import { combineReducers } from 'redux';
import currentNoodleReducer from './currentNoodleReducer';

export default combineReducers({
  currentNoodle: currentNoodleReducer,
});
