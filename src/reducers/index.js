import { combineReducers } from 'redux';
import { appReducer } from './AppReducer';
import { loginReducer } from './RegisterReducer';

export default combineReducers({
  appReducer,
  loginReducer
});
