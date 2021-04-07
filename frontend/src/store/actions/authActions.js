import axios from "axios";

import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_FAIL,
} from "../constants/authConstants";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('/api/admin/signin', { email, password });
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('auth', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

const signout = () => (dispatch) => {
  localStorage.removeItem('auth');
  dispatch({ type: SIGNOUT });

};

export { signin, signout };
