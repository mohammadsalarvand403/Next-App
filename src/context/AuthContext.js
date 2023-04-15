import { createContext, useContext, useEffect } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { useReducerAsync } from "use-reducer-async";
import  Router  from 'next/router';
const AuthContext =createContext()
const AuthContextDispatcher=createContext()

const initialState={
    user:null,
    loading:true,
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
            toast.success(`خوش آمدی ${data.name}`)
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
            toast.success(`خوش آمدی ${data.name}`)
            dispatch({type:"SIGNIN_SUCCESS",payload:data})
            Router.push("/")
        }).catch((err)=>{
            dispatch({type:"SIGNIN_REJECT",error:err?.response?.data?.message})
            toast.error(err?.response?.data?.message)
        })
    },
    LOAD_USER:
    ({ dispatch }) =>  
    (action) => {
        dispatch({type:"SIGNIN_PENDING"})
        axios
        .get('http://localhost:5000/api/user/load',{withCredentials:true})
        .then(({data})=>{
            dispatch({type:"SIGNIN_SUCCESS",payload:data})
        }).catch((err)=>{
            dispatch({type:"SIGNIN_REJECT",error:err?.response?.data?.message})
            
        })
    },
    SIGNOUT:
     ({ dispatch }) =>  
    (action) => {
        axios
        .get('http://localhost:5000/api/user/logout',{withCredentials:true})
        .then(()=>{
           window.location.href="/signin"
        }).catch()
    },
  };

  const AuthProvider = ({children}) => {
    const[user,dispatch]=useReducerAsync(reducer,initialState,asyncActionHandlers)
    useEffect(()=>{
    dispatch({type:"LOAD_USER"})
    },[])
    return ( 
        <AuthContext.Provider value={user}>
            <AuthContextDispatcher.Provider value={dispatch}>
            {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;

export const uesAuth=()=>useContext(AuthContext);
export const uesAuthActoins=()=>useContext(AuthContextDispatcher)
