import Loading from "@/components/Loading";
import BudgetAuraTitle from "@/components/Logo";
import { showToast } from "@/components/ShowToast";
import { colors } from "@/Constants/Color";
import { url } from "@/Constants/url";
import { logOut, updtateVerifiedStatus } from "@/store/slices/authSlice";
import { RootState } from "@/store/store";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const {width, height} = Dimensions.get("window")
const VerifyEmail = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false) 
  const [isLoadingBtn, setIsLoadingBTn] = useState<boolean>(false) 
  const  [code, setCode] = useState("")
  const [borderColor, setBorderColor] = useState(colors.grey)
  const router = useRouter();
  const dispatch = useDispatch()
  const email = useSelector((state:RootState)=>state.auth.user?.email)
  console.log(email)
  useEffect(()=>{
    const sendVerificationCode = async ()=>{
      setIsLoading(true)
      try {
        const res = await axios.post(`${url}/auth/send-verification-code`, {email})
        console.log(res.data.message)
        
      } catch (error:any) {
        console.log(error.response.data.message)
       
      }
      finally {
        setIsLoading(false)
      }

    }
    sendVerificationCode()
  }, [])
  const verifyCode = async ()=>{
    setIsLoadingBTn(true)
    try {
      const res = await axios.post(`${url}/auth/verify-verification-code`, {email, code})
      console.log(res.data.message)
      dispatch(updtateVerifiedStatus())
      router.replace("/(tabs)")
    } catch (error:any) {
      console.log(error.response.data)
      showToast(error.response.data.message)
      setBorderColor("red")
    }
    finally {
      setIsLoadingBTn(false)
    }
  }
  const handleChange = (value:string)=>{
    setBorderColor(colors.grey)
    setCode(value)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
       {
        isLoading ? <Loading/> :    <View style={style.page}>
        <View style={style.title}>
          <BudgetAuraTitle />
          <Text style={{ fontSize: height * 0.035, color: colors.textColor }}>
            Email verification
          </Text>
        </View>
        <Text style={{ fontSize: height * 0.016, color: colors.textColor }}>
        A verification code has been sent to your email address. Please verify your email !
          </Text>
        <View style={style.container_input}>
          <View style={style.input}>
            <Text style={style.input_label}>Enter code</Text>
            <TextInput
              style={[style.text_input, {borderColor:borderColor}]}
              value={code}
              onChangeText={(val) => handleChange(val)}
              placeholder="Enter the code"
              placeholderTextColor={colors.white}
            />
          </View>
        </View>
        <View style={style.btn}>
          {
              isLoadingBtn ? <Loading/> : <TouchableOpacity onPress={verifyCode}>
              <Text style={{ color: colors.textColor, fontSize: height * 0.02 }}>
                Verify
              </Text>
            </TouchableOpacity> 
          }
        </View>
        <View style={style.signup_btn}>
          <Text style={style.signup_btn_text}>Not received a code ?</Text>
          <TouchableOpacity
            onPress={() => {
            
            }}
          >
            <Text style={[style.signup_btn_text, { color: colors.primary }]}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.signup_btn}>
          <Text style={style.signup_btn_text}>Not veirfy?</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(logOut());
            }}
          >
            <Text style={[style.signup_btn_text, { color: colors.primary }]}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
       }
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background
  },
  title: {
    alignItems: "center",
    marginBottom: "10%",
  },
  page: {
    flex: 1,
    backgroundColor: colors.background,
    color: "white",
    padding: 10,
    flexDirection: "column",
    gap: height * 0.02,
  },
  container_input: {
    gap: height * 0.02,
  },
  input: {
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    gap: height * 0.015,
  },
  input_label: {
    color: colors.textColor,
    fontSize: height * 0.02,
  },
  text_input: {
    backgroundColor: colors.background,
    height: height * 0.055,
    width: "100%",
   
    borderWidth: 2,
    borderRadius: 10,
    color: colors.textColor,
    fontSize:height * 0.015
  },
  btn: {
    backgroundColor: colors.primary,
    height: height * 0.05,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signup_btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: height * 0.015,
  },
  signup_btn_text: {
    fontSize: height * 0.016,
    color: colors.white,
  },
});

export default VerifyEmail;
