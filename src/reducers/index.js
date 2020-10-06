import { combineReducers } from 'redux';
import noodlesReducer from './noodlesReducer';
import selectedNoodleReducer from './selectedNoodleReducer';

export default combineReducers({
  noodles: noodlesReducer,
  selectedNoodle: selectedNoodleReducer,
});
