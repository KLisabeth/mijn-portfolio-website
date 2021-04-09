import Axios from "axios";

import {
  MESSAGE_SEND_REQUEST,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_FAIL,
} from "../constants/messageConstants";

export const messageMe = (email, comment) => async (dispatch) => {
  try {
  dispatch({ type: MESSAGE_SEND_REQUEST, payload: { email, comment } });
    const {data} = await Axios.post("api/message", { email, comment});
    dispatch({ type: MESSAGE_SEND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_SEND_FAIL,  payload: error.response.data.message
      ? error.response.data.message
      : error.message, });
  }
};
