import { CardType } from "./type";


export const getCardInfo = (type:string):CardType =>
{
    if (type == "transport")
        return {type:type, color:"#9c6368", background:"#9c636826", name:"car", title:"Transport"}
    if (type == "shop")
        return {type:type, color:"#835294", background:"#83529426", name:"shop", title:"Shopping"}
    if (type == "health")
        return {type:type, color:"#2b8b9b", background:"#2b8b9b26", name:"heart", title:"Health"}
    if (type == "bill")
        return {type:type, color:"red", background:"#2b8b9b26", name:"heart", title:"Health"}
    return {type:type, color:"#835294", background:"#83529426", name:"car", title:"Transport"}
}