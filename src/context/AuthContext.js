import { createContext, useContext } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { useReducerAsync } from "use-reducer-async";
import  Router  from 'next/router';
const AuthContext =createContext()
const AuthContextDispatcher=createContext()

const initialState={
    user:null,
    loading:false,
    error:null
}

const reducer=(state,action)=>{
switch(action.type){
    case "SIGNIN_PENDING": 
    return {error:null ,user:null,loading:true};
     case "SIGNIN_SUCCESS":
    return{loading:false,error:null ,user:action.payload};
    case "SIGNIN_REJECT":
            return {loading:false ,user:null,error:action.error};
    case "SIGNUP_PENDING": 
    return {error:null ,user:null,loading:true};
     case "SIGNUP_SUCCESS":
    return{loading:false,error:null ,user:action.payload};
    case "SIGNUP_REJECT":
            return {loading:false ,user:null,error:action.error};
    default :
    return{...state}
    }
};
const asyncActionHandlers = {
    SIGNIN:
     ({ dispatch }) =>  
    (action) => {
        dispatch({type:"SIGNIN_PENDING"})
        axios
        .post('http://localhost:5000/api/user/signin',action.payload,{withCredentials:true})
        .then(({data})=>{
            toast.success("خوش آمدید")
            dispatch({type:"SIGNIN_SUCCESS",payload:data})
            Router.push("/")
        }).catch((err)=>{
            dispatch({type:"SIGNIN_REJECT",error:err?.response?.data?.message})
            toast.error(err?.response?.data?.message)
        })
    },
    SIGNUP:
    ({ dispatch }) =>  
    (action) => {
        dispatch({type:"SIGNIN_PENDING"})
        axios
        .post('http://localhost:5000/api/user/signup',action.payload,{withCredentials:true})
        .then(({data})=>{
            toast.success("خوش آمدید")
            dispatch({type:"SIGNIN_SUCCESS",payload:data})
            Router.push("/")
        }).catch((err)=>{
            dispatch({type:"SIGNIN_REJECT",error:err?.response?.data?.message})
            toast.error(err?.response?.data?.message)
        })
    },
  };

  const AuthProvider = ({children}) => {
    const[user,Dispatch]=useReducerAsync(reducer,initialState,asyncActionHandlers)
    return ( 
        <AuthContext.Provider value={user}>
            <AuthContextDispatcher.Provider value={Dispatch}>
            {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;

export const uesAuth=()=>useContext(AuthContext);
export const uesAuthActoins=()=>useContext(AuthContextDispatcher)
