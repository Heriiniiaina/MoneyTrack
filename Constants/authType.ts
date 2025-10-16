export type USER = {
    _id:string,
    name:string,
    email:string
}
export type AUTHUSER = {
    token:string,
    isAuthenticiated:boolean
}
export type RootState = {
    auth:AUTHUSER,
}