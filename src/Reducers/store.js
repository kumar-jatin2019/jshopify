import { createStore ,applyMiddleware} from 'redux'
import cartReducer from './cartReducers'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk  from "redux-thunk";
const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(cartReducer,composeWithDevTools())

export default store;