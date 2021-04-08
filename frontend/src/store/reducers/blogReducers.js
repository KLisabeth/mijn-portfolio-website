import {
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_SAVE_REQUEST,
  BLOG_SAVE_SUCCESS,
  BLOG_SAVE_FAIL,
  BLOG_SAVE_RESET,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DELETE_RESET,
} from "../constants/blogConstants";

function blogListReducer(state = { blogs: [] }, action) {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, blogs: [] };
    case BLOG_LIST_SUCCESS:
      return { loading: false, blogs: action.payload };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


function blogDeleteReducer(state = { blog: {} }, action) {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };
    case BLOG_DELETE_SUCCESS:
      return { loading: false, blog: action.payload, success: true };
    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };
   case BLOG_DELETE_RESET:
   return {}
    default:
      return state;
  }
}
function blogSaveReducer(state = { blog: {} }, action) {
  switch (action.type) {
    case BLOG_SAVE_REQUEST:
      return { loading: true };
    case BLOG_SAVE_SUCCESS:
      return { loading: false, success: true, blog: action.payload };
    case BLOG_SAVE_FAIL:
      return { loading: false, error: action.payload };
    case BLOG_SAVE_RESET:
        return {}
    default:
      return state;
  }
}

export {
  blogListReducer,
  blogSaveReducer,
  blogDeleteReducer,
};
