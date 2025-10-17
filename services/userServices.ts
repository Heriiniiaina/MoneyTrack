import { RootState } from "@/Constants/authType"
import { useSelector } from "react-redux"

export const useUserId = ()=>{
    return useSelector((state:RootState)=>state.auth.user?._id)
}