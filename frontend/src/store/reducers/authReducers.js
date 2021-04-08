const {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,

  SIGNOUT,
} = require("../constants/authConstants");

export const adminSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { loading: true };
    case SIGNIN_SUCCESS:
      return { loading: false , auth: action.payload };
    case SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case SIGNOUT:
      return {};
    default:
      return state;
  }
}

export default adminSigninReducer;
