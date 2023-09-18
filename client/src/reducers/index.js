import { combineReducers } from 'redux';
import sheetsReducer from './sheets.js';

const rootReducer = combineReducers({
  sheets: sheetsReducer
});

export default rootReducer;
