import { combineReducers } from 'redux';
import selectedNoodleReducer from './selectedNoodleReducer';

export default combineReducers({
  selectedNoodle: selectedNoodleReducer,
});
