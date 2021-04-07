import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import adminSigninReducer from "./store/reducers/authReducers";
import { profileEditReducer, profileListReducer } from "./store/reducers/profileReducers";

const auth = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : null;

const initialState = { adminSignin: {auth}};


const reducer = combineReducers({
  adminSignin: adminSigninReducer,

  profileList: profileListReducer,
  profileEdit: profileEditReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
