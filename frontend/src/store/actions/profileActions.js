import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAIL
} from "../constants/profileConstants";
import Axios from "axios";

const listProfile = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_LIST_REQUEST });
    const { data } = await Axios.get("/api/profile");
    dispatch({ type: PROFILE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROFILE_LIST_FAIL, payload: error.message });
  }
};



const editProfile = (profile) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_EDIT_REQUEST });
    const { adminSignin: { auth:{ token} } } = getState();
    if (!profile._id) {
      const { data } = await Axios.post("/api/profile", profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: PROFILE_EDIT_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put("/api/profile/" + profile._id, profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: PROFILE_EDIT_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PROFILE_EDIT_FAIL, payload: error.message });
  }
};




export {
  listProfile,
  editProfile,
}
