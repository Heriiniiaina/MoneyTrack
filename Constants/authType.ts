export type USER = {
    _id:string,
    name:string,
    email:string,
    balance:string,
    income:string,
    expense:string
}
export type AUTHUSER = {
    token:string | null,
    isAuthenticiated:boolean,
    user:USER | null
}
export type RootState = {
    auth:AUTHUSER,
}