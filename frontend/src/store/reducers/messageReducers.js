const {
  MESSAGE_SEND_REQUEST,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_FAIL,
  MESSAGE_RESET
} = require("../constants/messageConstants");

function messageReducer(state = {}, action) {
  switch (action.type) {
    case MESSAGE_SEND_REQUEST:
      return { loading: true };
    case MESSAGE_SEND_SUCCESS:
      return { loading: false, success: true};
    case MESSAGE_SEND_FAIL:
      return { loading: false, error: action.payload };
      case MESSAGE_RESET:
        return {}
    default:
      return state;
  }
}

export default messageReducer;
