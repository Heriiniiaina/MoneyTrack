import { USER } from "./authType";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT = "LOGOUT"
interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload:{
        token:string,
        user:USER
    }
}
interface LOGOUT_ACTION {
    type:typeof LOGOUT
}

export type AuthActionType = LoginSuccessAction | LOGOUT_ACTION