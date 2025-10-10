import Home from "@/pages/Home";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
          <Home/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default index;
