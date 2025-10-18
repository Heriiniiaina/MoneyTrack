import { url } from "@/Constants/url"
import axios from "axios"


export const getTransaction = async(id:string)=> {

    try {
        const res = await axios.get(`${url}/transaction/get-transaction/${id}`)
    } catch (error) {
        
    }
}