import Loading from "@/components/Loading";
import BudgetAuraTitle from "@/components/Logo";
import { showToast } from "@/components/ShowToast";
import { USER } from "@/Constants/authType";
import { colors } from "@/Constants/Color";
import { setCredentials } from "@/store/slices/authSlice";
import axios from "axios";
import { useRouter } from "expo-router";
import { jwtDecode } from 'jwt-decode';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
type Props = {};

const login = (props: Props) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
    const router = useRouter() 
  const handleSubmit = async ()=>{
    if (email.length < 1 || password.length < 1)
    {
      showToast("Please provide form");
      return;
    }
    setIsLoading(true)
    try {
      const res = await axios.post("http://192.168.42.216:8000/MoneyTrack/auth/login", {email, password})
      showToast(res.data.message)
      const userDecoded:USER = jwtDecode(res.data.token) as USER
      dispatch(setCredentials({token:res.data.token, user:userDecoded}))
      console.log(userDecoded)
    } catch (error:any) {
      showToast(error.response.data.message)
      console.log(error.response.data)
    }
    finally{
     
        setIsLoading(false)
      
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.page}>
          <View style={style.title}>
            <BudgetAuraTitle/>
            <Text style={{fontSize:30, color:colors.textColor}}>Welcome back!</Text>
          </View>
          <View style={style.container_input}>
            <View style={style.input}>
              <Text style={style.input_label}>Email</Text>
              <TextInput style={style.text_input} value={email} onChangeText={val=>setEmail(val)} placeholder="Enter your email" placeholderTextColor={colors.white}/>
            </View>
            <View style={style.input}>
              <Text style={style.input_label}  >Password</Text>
              <TextInput style={style.text_input} secureTextEntry={true} value={password} onChangeText={val=>setPassword(val)} placeholder="Enter your password" placeholderTextColor={colors.white}/>
            </View>
          </View>
          <View style={{alignItems:"flex-end"}}>
             <TouchableOpacity>
                <Text style={{color:colors.primary,fontSize:15}}>Forgot password ?</Text>
             </TouchableOpacity>
          </View>
          <View style={style.btn}>
            {
              isLoading ? <Loading/> : <TouchableOpacity onPress={handleSubmit}>
              <Text style={{color:colors.textColor, fontSize:20}}>Sign In</Text>
          </TouchableOpacity>
            }
          </View>
          <View style={style.signup_btn}>
              <Text style={style.signup_btn_text}>Dont have an account ?</Text>
              <TouchableOpacity onPress={()=>{router.replace("/auth/register")}}>
                 <Text style={[style.signup_btn_text, {color:colors.primary}]}>Create accounts</Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    alignItems: "center",
    marginBottom:"10%"
  },
  page: {
    flex: 1,
    backgroundColor: colors.background,
    color: "white",
    padding: 10,
    flexDirection: "column",
    gap:15
  },
  container_input:{
    gap:15
  },
  input: {
    justifyContent: "center",
    flexDirection: "column",
    width: '100%',
    gap:10
  },
  input_label: {
    color: colors.textColor,
    fontSize:20
  },
  text_input: {
    backgroundColor: colors.background,
    height: 60,
    width: '100%', 
    borderColor:colors.grey,
    borderWidth:2,
    borderRadius:10,
    color:colors.textColor
  },
  btn:{
    backgroundColor:colors.primary,
    height:50,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  },
  signup_btn:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    gap:10
  },
  signup_btn_text:{
    fontSize:15,
    color:colors.white
  }
});

export default login;
