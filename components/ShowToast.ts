import { ToastAndroid } from "react-native"

type Props = {
    message:string
}

export const showToast = (message:string)=>{
    ToastAndroid.showWithGravity(message,ToastAndroid.SHORT,ToastAndroid.CENTER
    )
}