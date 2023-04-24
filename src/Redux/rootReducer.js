import { combineReducers } from "redux";;
import { userSigninReducer, userSigupReducer } from "./user/userReducer";



const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup:userSigupReducer,
});

export default rootReducer;
