import {
        SIGNIN_USER_REQUEST,
        SIGNIN_USER_SUCCESS,
        SIGNIN_USER_FAILURE,
        SIGNUP_USER_REQUEST,
        SIGNUP_USER_SUCCESS,
        SIGNUP_USER_FAILURE,
        
    } from "./userType";

      
     export const userSigninReducer = (state = {}, action) => {
        switch (action.type) {
          case SIGNIN_USER_REQUEST:
            return {
              ...state,
              loading: true,
            };
          case SIGNIN_USER_SUCCESS:
            return {
              ...state,
              loading: false,
              user: action.payload,
              error: "",
            };
          case SIGNIN_USER_FAILURE:
            return {
              ...state,
              loading: false,
              user: [],
              error: action.payload,
            };
      
          default:
            return state;
        }
      };
      
     export  const userSigupReducer = (state = {}, action) => {
        switch (action.type) {
          case SIGNUP_USER_REQUEST:
            return {
              ...state,
              loading: true,
            };
          case SIGNUP_USER_SUCCESS:
            return {
              ...state,
              loading: false,
              user: action.payload,
              error: "",
            };
          case SIGNUP_USER_FAILURE:
            return {
              ...state,
              loading: false,
              user: [],
              error: action.payload,
            };
      
          default:
            return state;
        }
      };
      