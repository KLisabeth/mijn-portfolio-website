const {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,

  LOGOUT_SUCCESS,
} = require("../constants/authConstants");

function adminSigninReducer(state = {}, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { loading: true };
    case SIGNIN_SUCCESS:
      return { loading: false, auth: action.payload };
    case SIGNIN_ERROR:
      return { loading: false, error: action.payload };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}

export default adminSigninReducer;
