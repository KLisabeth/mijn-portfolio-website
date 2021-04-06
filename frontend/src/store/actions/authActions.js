import Axios from "axios";

import {
  SIGNIN_ERROR,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../constants/authConstants";

const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_REQUEST, payload: { email, password } });
    const { data } = await Axios.post(`api/admin/signin`, { email, password });
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('auth', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: SIGNIN_ERROR, payload: error.message });
  }
};

const signout = () => (dispatch) => {
  localStorage.removeItem('auth');
  dispatch({ type: LOGOUT_SUCCESS });
  document.location.href = "/";
};

export { signin, signout };
