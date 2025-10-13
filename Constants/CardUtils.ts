import { CardType } from "./type";


export const getCardInfo = (type:string):CardType =>
{
    if (type == "transport")
        return {type:type, color:"#9c6368", background:"#9c636826", name:"car"}
    if (type == "shopping")
        return {type:type, color:"#835294", background:"#83529426", name:"shop"}
    if (type == "health")
        return {type:type, color:"#2b8b9b", background:"#2b8b9b26", name:"heart"}
    return {type:type, color:"#835294", background:"#83529426", name:"car"}
}