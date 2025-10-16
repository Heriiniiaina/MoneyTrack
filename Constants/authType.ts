export type USER = {
    _id:string,
    name:string,
    email:string
}
export type AUTHUSER = {
    token:string | null,
    isAuthenticiated:boolean
}
export type RootState = {
    auth:AUTHUSER,
}