import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import adminSigninReducer from "./store/reducers/authReducers";

const initialState = { adminSignin: {
  auth: localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null,
},};
const reducer = combineReducers({
  adminSignin: adminSigninReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
