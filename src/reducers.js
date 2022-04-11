import { LOGIN, LOGIN_ASYNC, LOGOUT } from "./actions";

const initialState = {
  isAuth: false,
  userDetails:" "
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ASYNC:
      return {
        ...state,
        isAuth:true,userDetails:action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuth:false,userDetails:""
      };
    default:
      return state;
  }
}

export default reducer;