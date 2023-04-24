import http from "@/service/httpService";
import Router  from "next/router";
import toast from "react-hot-toast";
import {
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNOUT_USER
} from "./userType";

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signinUserSuccess = (users) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: users,
  };
};

export const signinUserFailure = (error) => {
  return {
    type:SIGNIN_USER_FAILURE,
    payload: error,
  };
};

//signupUser
export const signupUserRequest = () => {
    return {
      type: SIGNUP_USER_REQUEST,
    };
  };
  
  export const signupUserSuccess = (users) => {
    return {
      type: SIGNUP_USER_SUCCESS,
      payload: users,
    };
  };
  
  export const signupUserFailure = (error) => {
    return {
        type:SIGNUP_USER_FAILURE,
      payload: error,
    };
  };


//? we dispatch the appropiate actions :
//signinUsersReducer
export const userSignin = (data) => {
  //? recieves the dispach method as arguments
  return (dispatch) => {
    dispatch(signinUserRequest());
    http
      .post("/user/signin",data,{withCredentials:true})
      .then((response) => {
        // const users = response.data.map((user) => user.name);
        toast.success(`خوش آمدی ${response.data.name}`)
        Router.push("/")
        dispatch(signinUserSuccess(response.data));
        // dispatch({type:signin_USERS_SUCCESS,payload:response.data});
      })
      .catch((error) => {
        dispatch(signinUserFailure(error.message));
        toast.error(error?.response?.data?.message)
      });
  };
};
//signupUsersReducer
export const UserSignup = (data) => {
    //? recieves the dispach method as arguments
    return (dispatch) => {
      dispatch(signupUserRequest());
      http
        .post("/user/signup",data,{withCredentials:true})
        .then((response) => {
          // const users = response.data.map((user) => user.name);
          toast.success(`خوش آمدی ${response.data.name}`)
        Router.push("/")
          dispatch(signupUserSuccess(response.data));
          dispatch(signinUserSuccess(response.data));
          // dispatch({type:signin_USERS_SUCCESS,payload:response.data});
        })
        .catch((error) => {
          dispatch(signupUserFailure(error.message));
          toast.error(error?.response?.data?.message)
        });
    };
  };
  
  //signout user reducer
  export const signout=()=>(dispatch)=>{
    dispatch({type:SIGNOUT_USER})
    http
    .get('/user/logout',{withCredentials:true})
    .then(({data})=>{
       window.location.href="/signin"
    }).catch()
  }

//load reducer

export const loadUserData=(store)=>{
  http
    .get('/user/load',{withCredentials:true})
    .then(({data})=>{
      store.dispatch(signinUserSuccess(data))
    }).catch((err)=>{})
}
