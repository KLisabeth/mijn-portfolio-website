import {
  PROFILE_LIST_FAIL,
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
 
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAIL,
  PROFILE_EDIT_RESET,

} from "../constants/profileConstants";

export function profileListReducer(state = { profiles: [] }, action) {
  switch (action.type) {
    case PROFILE_LIST_REQUEST:
      return { loading: true, profiles: [] };
    case PROFILE_LIST_SUCCESS:
      return { loading: false, profiles: action.payload };
    case PROFILE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const profileEditReducer = (state = { profile: {}}, action) => {
  switch (action.type) {
    case PROFILE_EDIT_REQUEST:
      return { loading: true };
    case PROFILE_EDIT_SUCCESS:
      return { loading: false, success: true , profile: action.payload};
    case PROFILE_EDIT_FAIL:
      return { loading: false, error: action.payload };
    case PROFILE_EDIT_RESET:
      return {};
    default:
      return state;
  }
};



