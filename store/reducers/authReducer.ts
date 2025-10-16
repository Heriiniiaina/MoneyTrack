import { AUTHUSER } from "@/Constants/authType";
import { AuthActionType } from './../../Constants/storeType';

const initialiseState:AUTHUSER = {
     token:null,
     isAuthenticiated:false
}

export const authReducer = (state = initialiseState, action:AuthActionType):AUTHUSER =>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                ...state,
                token:action.payload.token,
                isAuthenticiated:true
            }
        case "LOGOUT":
            return initialiseState
        default:
            return state
    }
}