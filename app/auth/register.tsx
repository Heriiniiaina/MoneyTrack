import Loading from "@/components/Loading";
import BudgetAuraTitle from "@/components/Logo";
import { showToast } from "@/components/ShowToast";
import { colors } from "@/Constants/Color";
import { url } from "@/Constants/url";
import { checkEmail, isValidPassword } from "@/Constants/Validator";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = {};
type FormType = {
    name:string,
    email:string,
    password:string
}

const {width, height} = Dimensions.get("window")
const Register = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false) 
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [formInput, setFormInput] = useState<FormType>({
    email:"",
    name:"",
    password:""
  })
  const check_form = (form:FormType,confirmPass:string)=>{
    if (formInput.email.length < 1 || formInput.name.length < 1 || formInput.password.length < 1)
    {
        showToast("Please provide form");
        return false
    }
    if (!checkEmail(formInput.email))
    {
        showToast("Please prove a valide email");
        return false
    }
    if (!isValidPassword(formInput.password))
    {
        showToast("Password must be at least 8 characters and contain both upper and lowercase.");
        return false
    }
    if (formInput.password != confirmPass)
    {
        showToast("Passwords do not match.")
        return false
    }   
        
    return true
  }
  const router = useRouter();
  const handleChange = (field:keyof FormType, value:string)=>{
    setFormInput(prev=>({...prev, [field]:value}))
  }
  const handleSubmit = async () => {
   if (!check_form(formInput, confirmPass))
        return
    setIsLoading(true)
    try {
        const res = await axios.post(`${url}/auth/register`, formInput)
        console.log(res.data)
        showToast("Register successfull")
        router.replace("/auth/login")
    } catch (error:any) {
        console.log(error.response.data.message)
    }
    finally{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1000)
        
    }
   
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.page}>
          <View style={style.title}>
            <BudgetAuraTitle />
            <Text style={{ fontSize: height * 0.035, color: colors.textColor }}>
              Welcome!
            </Text>
          </View>
          <View style={style.container_input}>
            <View style={style.input}>
              <Text style={style.input_label}>Name</Text>
              <TextInput
                style={style.text_input}
                value={formInput.name}
                onChangeText={(val) => handleChange("name", val)}
                placeholder="Enter your email"
                placeholderTextColor={colors.white}
              />
            </View>
            <View style={style.input}>
              <Text style={style.input_label}>Email</Text>
              <TextInput
                style={style.text_input}
                value={formInput.email}
                onChangeText={(val) => handleChange("email", val)}
                placeholder="Enter your email"
                placeholderTextColor={colors.white}
              />
            </View>
            <View style={style.input}>
              <Text style={style.input_label}>Password</Text>
              <TextInput
                style={style.text_input}
                secureTextEntry={true}
                value={formInput.password}
                onChangeText={(val) => handleChange("password", val)}
                placeholder="Enter your password"
                placeholderTextColor={colors.white}
              />
            </View>
            <View style={style.input}>
              <Text style={style.input_label}>Confirm password</Text>
              <TextInput
                style={style.text_input}
                value={confirmPass}
                onChangeText={(val) => setConfirmPass(val)}
                placeholder="Enter your password"
                placeholderTextColor={colors.white}
              />
            </View>
          </View>
          <View style={style.btn}>
            {
                isLoading ? <Loading/> : <TouchableOpacity onPress={handleSubmit}>
                <Text style={{ color: colors.textColor, fontSize: 20 }}>
                  Create account
                </Text>
              </TouchableOpacity> 
            }
          </View>
          <View style={style.signup_btn}>
            <Text style={style.signup_btn_text}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                router.replace("/auth/login");
              }}
            >
              <Text style={[style.signup_btn_text, { color: colors.primary }]}>
                Sign in
              </Text>
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
    borderColor: colors.grey,
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

export default Register;
