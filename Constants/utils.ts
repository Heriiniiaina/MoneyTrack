export const getFontSize = (width:number, type:string):number=>{
    if (type == "min" && width < 400)
        return 10
    else if (type == "min")
        return 15
    if (type == "max" && width < 400)
        return 14
    else if (type == "max")
        return 20
    if (type == "other" && width < 400)
        return 14
    return 18
}