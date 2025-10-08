import BudgetAuraTitle from "@/components/Logo";
import { colors } from "@/Constants/Color";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const login = (props: Props) => {
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
              <TextInput style={style.text_input} placeholder="Enter your email" placeholderTextColor={colors.white}/>
            </View>
            <View style={style.input}>
              <Text style={style.input_label}>Password</Text>
              <TextInput style={style.text_input} placeholder="Enter you password" placeholderTextColor={colors.white}/>
            </View>
          </View>
          <View style={{alignItems:"flex-end"}}>
             <TouchableOpacity>
                <Text style={{color:colors.primary,fontSize:15}}>Forgot password ?</Text>
             </TouchableOpacity>
          </View>
          <View style={style.btn}>
            <TouchableOpacity>
                <Text style={{color:colors.textColor, fontSize:20}}>Sign In</Text>
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
  }
});

export default login;
