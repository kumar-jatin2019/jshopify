
import cartReducer from './cartReducers';
import { combineReducers } from "redux";

export default combineReducers({
    CartModule: cartReducer,
  });
  